import { Component } from "@angular/core";

@Component({
    selector: "meal-list",
    templateUrl: "./mealList.component.html",
    styleUrls: []
})

export class MealList {
    public meals = [{
        title: "Recipe #1",
        description: "A delicious recipe."
    }, {
        title: "Recipe #2",
        description: "A delicious recipe."
    }, {
        title: "Recipe #3",
        description: "A delicious recipe."
    }];
}