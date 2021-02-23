import { Component, OnInit, HostListener } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { Meal } from '../meal';
import { Ingredient } from '../ingredient';
import { MealService } from '../meal.service';
import { debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'meal-search',
  templateUrl: './meal-search.component.html',
  styleUrls: ['./meal-search.component.css']
})
export class MealSearchComponent implements OnInit {
    ingredients$: Observable<Ingredient[]> | undefined;
    meals$: Observable<Meal[]> | undefined;
    private searchTerms = new Subject<string>();
    queryString: string | undefined;
    showSearchResults: boolean = false;

    @HostListener('document:click', ['$event']) onDocumentClick() {
        this.showSearchResults = false;
    }

    constructor(private mealService: MealService) {
    }

    // Push a search term into the observable stream
    search(term: string): void {
        this.showSearchResults = true;
        this.queryString = term;
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.ingredients$ = this.searchTerms.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            // Map ignores all string items except for the last comma separated value
            map((term: string) => term.split(",").pop()!.trim()),
            switchMap((term: string) => this.mealService.searchIngredients(term))
        );
    }

    selectIngredient(ingredient: string): void {
        // TODO: Change focus from search results to search bar on click
        this.incorporateSelectedIngredient(ingredient);

        // Clear search results
        this.searchTerms.next(" ");

        // TODO: clear this jank unit testing
        console.log(`Selected: ${ingredient}`);
        console.log("Current Query: " + this.queryString);
    }

    searchMeals(): void {
        // Clear current search results
        this.meals$ = of([]);

        // TODO: clear jank unit testing
        console.log("Current Query @ Button Press: " + this.queryString);

        // Return results based on new query string
        this.meals$ = this.mealService.searchMeals(this.queryString!);
    }

    private incorporateSelectedIngredient(ingredient: string): void {
        // Splits query string into array, removes the last item, inserts the user selected ingredient, and updates the queryString
        let stringArray = this.queryString?.split(",");
        stringArray?.pop();
        stringArray?.push(ingredient + ", ");
        let newString = stringArray?.join(", ");
        this.queryString = newString;
    }
}
