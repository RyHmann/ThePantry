import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MealsComponent = class MealsComponent {
    constructor(mealService) {
        this.mealService = mealService;
    }
    ngOnInit() {
        this.getMeals();
    }
    getMeals() {
        this.mealService.getMeals().subscribe(meals => this.meals = meals);
    }
    onSelect(meal) {
        this.selectedMeal = meal;
    }
};
MealsComponent = __decorate([
    Component({
        selector: 'meals',
        templateUrl: './meals.component.html',
        styleUrls: ['./meals.component.css']
    })
], MealsComponent);
export { MealsComponent };
//# sourceMappingURL=meals.component.js.map