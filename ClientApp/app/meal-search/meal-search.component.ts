import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Meal } from '../meal';
import { Ingredient } from '../ingredient';
import { MealService } from '../meal.service';
import { debounceTime, distinctUntilChanged, switchMap, filter, map } from 'rxjs/operators';

@Component({
  selector: 'meal-search',
  templateUrl: './meal-search.component.html',
  styleUrls: ['./meal-search.component.css']
})
export class MealSearchComponent implements OnInit {
    ingredients$: Observable<Ingredient[]> | undefined;
    private searchTerms = new Subject<string>();
    queryString: string | undefined;
    searchResultState: boolean = false;

    constructor(private mealService: MealService) {
    }

    // Push a search term into the observable stream
    search(term: string): void {
        this.queryString = term;
        console.log(this.queryString);
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

        // Removes last item after comma, and inserts the value selected from auto-complete search result
        // TODO: Change focus from search results to search bar on click, hide search results
        let stringArray = this.queryString?.split(",");
        stringArray?.pop();
        stringArray?.push(ingredient + ", ");
        let newString = stringArray?.join(", ");
        this.queryString = newString;

        // Clear search results
        this.searchTerms.next(" ");

        // Jank unit testing
        console.log(`Selected: ${ingredient}`);
        console.log("Current Query: " + newString);
    }

    toggleDropdown(): void {
        this.searchResultState = !this.searchResultState;
    }

}
