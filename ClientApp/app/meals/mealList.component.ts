import { Component, OnInit } from "@angular/core";
import { IMeal } from "./meal";
import { DataService } from "../shared/dataService";

@Component({
    selector: "meal-list",
    templateUrl: "./mealList.component.html",
    styleUrls: []
})

export class MealList implements OnInit {
    pageTitle: string = "Meal List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    searchStringIn: string = "";
    searchStringOut: string = "";
    meals: IMeal[];
 

    constructor(private data: DataService) {
        this.meals = data.meals;
    }

    ngOnInit(): void {
        console.log("In OnInit");
    }
} 