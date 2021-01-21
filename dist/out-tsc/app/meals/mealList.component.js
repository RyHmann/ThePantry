import { __decorate } from "tslib";
import { Component } from "@angular/core";
let MealList = class MealList {
    constructor() {
        this.meals = [{
                title: "Recipe #1",
                description: "A delicious recipe."
            }, {
                title: "Recipe #1",
                description: "A delicious recipe."
            }, {
                title: "Recipe #1",
                description: "A delicious recipe."
            }];
    }
};
MealList = __decorate([
    Component({
        selector: "meal-list",
        templateUrl: "./mealList.component.html",
        styleUrls: []
    })
], MealList);
export { MealList };
//# sourceMappingURL=mealList.component.js.map