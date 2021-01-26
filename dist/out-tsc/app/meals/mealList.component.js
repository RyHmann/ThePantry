import { __decorate } from "tslib";
import { Component } from "@angular/core";
let MealList = class MealList {
    constructor(data) {
        this.data = data;
        this.pageTitle = "Meal List";
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.searchStringIn = "";
        this.searchStringOut = "";
        this.meals = data.meals;
    }
    ngOnInit() {
        console.log("In OnInit");
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