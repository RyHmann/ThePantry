import { Component } from "@angular/core";

@Component({
    selector: "meal-list",
    templateUrl: "./mealList.component.html",
    styleUrls: []
})

export class MealList {
    imageWidth: number = 50;
    imageMargin: number = 2;
    public meals = [{
        title: "Recipe #1",
        description: "A delicious recipe.",
        thumbnail: "/assets/thumbnails/pinchofyum_arrozconpollo.jpeg"
    }, {
        title: "Recipe #2",
        description: "A delicious recipe.",
        thumbnail: "/app/assets/thumbnails/pinchofyum_coconutlimegrilledchickenandrice.jpeg"
    }, {
        title: "Recipe #3",
        description: "A delicious recipe.",
        thumbnail: "./assets/thumbnails/pinchofyum_elotequeso.jpeg"
    }];
}