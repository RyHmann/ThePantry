import { Component, OnInit, HostListener } from '@angular/core';
import { Observable, Subject, of, throwError } from 'rxjs';
import { MealService } from '../meal.service';
import { debounceTime, distinctUntilChanged, switchMap, map, tap } from 'rxjs/operators';
import { Meal } from '../meal';
import { Ingredient } from '../ingredient';
import { QueryResult } from '../queryresult';

@Component({
  selector: 'meal-search',
  templateUrl: './meal-search.component.html',
  styleUrls: ['./meal-search.component.css']
})
export class MealSearchComponent implements OnInit {
    ingredients$: Observable<Ingredient[]> | undefined;
    meals$: Meal[] | undefined;
    queryResult$: Observable<QueryResult> | undefined;
    private searchTerms = new Subject<string>();
    queryString: string | undefined;
    showSearchResults: boolean = false;

    @HostListener('document:click', ['$event']) onDocumentClick() {
        this.showSearchResults = false;
    }

    constructor(private mealService: MealService) {
    }

    ngOnInit(): void {
        this.ingredients$ = this.searchTerms.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            // Map ignores all string items except for the last comma separated value and removes minus sign
            map((term: string) => term.split(",").pop()!.replace("-","").trim()),
            switchMap((term: string) => this.mealService.searchIngredients(term))
        );
    }

    // Push a search term into the observable stream
    search(term: string): void {
        this.showSearchResults = true;
        this.queryString = term;
        this.searchTerms.next(term);
    }

    selectIngredient(ingredient: Ingredient): void {
        this.incorporateSelectedIngredient(ingredient.name);
        this.searchTerms.next("");
    }

    searchMeals(): void {
        this.queryResult$ = of();
        this.queryResult$ = this.mealService.searchMeals(this.queryString!);
    }

    private incorporateSelectedIngredient(ingredient: string): void {
        // Splits query string into array, removes the last item, inserts the user selected ingredient, and updates the queryString
        let stringArray = this.queryString?.split(", ");
        let ingredientString = stringArray?.pop()!.trim();
        this.checkForMinusSign(ingredientString!) ? stringArray?.push("-" + ingredient + ", ") : stringArray?.push(ingredient + ", ");
        let newString = stringArray?.join(", ");
        this.queryString = newString;
    }

    private checkForMinusSign(term: string): boolean {
        return term.slice(0,1) === '-' ? true : false;
    }
    
}
