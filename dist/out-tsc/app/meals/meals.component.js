import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let MealsComponent = class MealsComponent {
    constructor(mealService) {
        this.mealService = mealService;
    }
    ngOnInit() {
    }
    onSelect(meal) {
        this.selectedMeal = meal;
    }
};
__decorate([
    Input()
], MealsComponent.prototype, "availableMeals", void 0);
MealsComponent = __decorate([
    Component({
        selector: 'meals',
        templateUrl: './meals.component.html',
        styleUrls: ['./meals.component.css']
    })
], MealsComponent);
export { MealsComponent };
//# sourceMappingURL=meals.component.js.map