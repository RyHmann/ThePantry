import { __decorate } from "tslib";
import { Component } from "@angular/core";
let MealList = class MealList {
    constructor() {
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.meals = [{
                title: "Recipe #1",
                description: "A delicious recipe.",
                thumbnail: "C:/Repos/csharp/Projects/ThePantry/ClientApp/assets/thumbnails/pinchofyum_arrozconpollo.jpeg"
            }, {
                title: "Recipe #2",
                description: "A delicious recipe.",
                thumbnail: "assets/thumbnails/pinchofyum_coconutlimegrilledchickenandrice.jpeg"
            }, {
                title: "Recipe #3",
                description: "A delicious recipe.",
                thumbnail: "assets/thumbnails/pinchofyum_elotequeso.jpeg"
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