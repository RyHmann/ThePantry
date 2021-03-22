import { Component, OnInit, HostListener } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { MealService } from '../meal.service';
import { debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';

import { Meal } from '../meal';
import { Ingredient } from '../ingredient';
import { ActiveIngredient } from '../activeingredient';

@Component({
  selector: 'meal-search',
  templateUrl: './meal-search.component.html',
  styleUrls: ['./meal-search.component.css']
})
export class MealSearchComponent implements OnInit {
    ingredients$: Observable<Ingredient[]> | undefined;
    meals$: Observable<Meal[]> | undefined;
    activeIngredients$: Observable<ActiveIngredient[]> | undefined;
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
        // TODO: BUG: An additional space is being introduced somewhere
        this.incorporateSelectedIngredient(ingredient.name);

        // Clear search results
        this.searchTerms.next("");

        // TODO: clear this jank unit testing
        console.log(`Selected: ${ingredient.name}`);
        console.log("Current Query: " + this.queryString);
    }

    searchMeals(): void {
        // Clear current search results
        this.meals$ = of([]);
        this.activeIngredients$ = of([]);

        // Return results based on new query string
        this.meals$ = this.mealService.searchMeals(this.queryString!);
    }

    private incorporateSelectedIngredient(ingredient: string): void {
        // Splits query string into array, removes the last item, inserts the user selected ingredient, and updates the queryString
        let stringArray = this.queryString?.split(",");
        let ingredientString = stringArray?.pop()!.trim();
        this.checkForMinusSign(ingredientString!) ? stringArray?.push("-" + ingredient + ", ") : stringArray?.push(ingredient + ", ");
        //stringArray?.push(ingredient + ", ");
        let newString = stringArray?.join(", ");
        this.queryString = newString;
    }

    private checkForMinusSign(term: string): boolean {
        return term.slice(0,1) === '-' ? true : false;
    }
}
