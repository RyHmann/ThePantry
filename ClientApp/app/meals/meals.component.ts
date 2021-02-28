import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Meal } from '../meal';
import { MealService } from '../meal.service';

@Component({
  selector: 'meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {
    @Input() availableMeals: Observable<Meal[]> | undefined;
    selectedMeal: Meal | undefined

    constructor(private mealService: MealService) {
        
    }

    ngOnInit(): void {
    }

    onSelect(meal: Meal): void {
        this.selectedMeal = meal;
    }
}
