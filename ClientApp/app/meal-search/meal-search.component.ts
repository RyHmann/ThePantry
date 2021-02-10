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
        let newString = this.queryString?.concat(ingredient + ", ");
        this.queryString = newString;
        console.log(`Selected: ${ingredient}`);
        console.log("Current Query: " + newString);
    }

}
