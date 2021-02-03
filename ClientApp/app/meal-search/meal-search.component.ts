import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Meal } from '../meal';
import { MealService } from '../meal.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'meal-search',
  templateUrl: './meal-search.component.html',
  styleUrls: ['./meal-search.component.css']
})
export class MealSearchComponent implements OnInit {
    meals$: Observable<Meal[]> | undefined;
    private searchTerms = new Subject<string>();

    constructor(private mealService: MealService) { }

    // Push a search term into the observable stream
    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.meals$ = this.searchTerms.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            switchMap((term: string) => this.mealService.searchMeals(term))
        );
  }

}
