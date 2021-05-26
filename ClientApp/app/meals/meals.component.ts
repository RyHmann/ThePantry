import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Meal } from '../meal';
import { QueryResult } from '../queryresult';

@Component({
  selector: 'meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {
    @Input() availableMeals: Meal[] | undefined;
    selectedMeal: Meal | undefined

    ngOnInit(): void {
    }

    onSelect(meal: Meal): void {
        this.selectedMeal = meal;
    }
}