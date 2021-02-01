import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal';
import { MealService } from '../meal.service';

@Component({
  selector: 'meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {
    meals: Meal[] | undefined
    selectedMeal: Meal | undefined

    constructor(private mealService: MealService) {
        
    }

    ngOnInit(): void {
        this.getMeals();
    }

    getMeals(): void {
        this.mealService.getMeals().subscribe(meals => this.meals = meals);
    }

    onSelect(meal: Meal): void {
        this.selectedMeal = meal;
    }
}
