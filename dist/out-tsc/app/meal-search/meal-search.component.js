import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
let MealSearchComponent = class MealSearchComponent {
    constructor(mealService) {
        this.mealService = mealService;
        this.searchTerms = new Subject();
        this.searchResultState = false;
    }
    // Push a search term into the observable stream
    search(term) {
        this.queryString = term;
        this.searchTerms.next(term);
    }
    ngOnInit() {
        this.ingredients$ = this.searchTerms.pipe(debounceTime(300), distinctUntilChanged(), 
        // Map ignores all string items except for the last comma separated value
        map((term) => term.split(",").pop().trim()), switchMap((term) => this.mealService.searchIngredients(term)));
    }
    selectIngredient(ingredient) {
        // TODO: Change focus from search results to search bar on click
        this.incorporateSelectedIngredient(ingredient);
        // Clear search results
        this.searchTerms.next(" ");
        // TODO: clear this jank unit testing
        console.log(`Selected: ${ingredient}`);
        console.log("Current Query: " + this.queryString);
    }
    searchMeals() {
        // Clear current search results
        this.meals$ = of([]);
        // TODO: clear jank unit testing
        console.log("Current Query @ Button Press: " + this.queryString);
        // Return results based on new query string
        this.meals$ = this.mealService.searchMeals(this.queryString);
    }
    incorporateSelectedIngredient(ingredient) {
        var _a;
        // Splits query string into array, removes the last item, inserts the user selected ingredient, and updates the queryString
        let stringArray = (_a = this.queryString) === null || _a === void 0 ? void 0 : _a.split(",");
        stringArray === null || stringArray === void 0 ? void 0 : stringArray.pop();
        stringArray === null || stringArray === void 0 ? void 0 : stringArray.push(ingredient + ", ");
        let newString = stringArray === null || stringArray === void 0 ? void 0 : stringArray.join(", ");
        this.queryString = newString;
    }
};
MealSearchComponent = __decorate([
    Component({
        selector: 'meal-search',
        templateUrl: './meal-search.component.html',
        styleUrls: ['./meal-search.component.css']
    })
], MealSearchComponent);
export { MealSearchComponent };
//# sourceMappingURL=meal-search.component.js.map