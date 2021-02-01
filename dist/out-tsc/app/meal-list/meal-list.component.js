import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MealListComponent = class MealListComponent {
    constructor() {
        this.meals = [
            { Title: "Cheeseburger", Description: "A sandwich" },
            { Title: "Clam Chowder", Description: "A soup" },
            { Title: "Bean Burrito", Description: "A burrito" },
            { Title: "Porkchop Sandwich", Description: "A sandwich" }
        ];
    }
    ngOnInit() {
    }
    onSelect(meal) {
        this.selectedMeal = meal;
    }
};
MealListComponent = __decorate([
    Component({
        selector: 'meal-list',
        templateUrl: './meal-list.component.html',
        styleUrls: ['./meal-list.component.css']
    })
], MealListComponent);
export { MealListComponent };
//# sourceMappingURL=meal-list.component.js.map