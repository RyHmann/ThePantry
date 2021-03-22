import { __decorate } from "tslib";
import { Component, HostListener } from '@angular/core';
import { Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
let MealSearchComponent = class MealSearchComponent {
    constructor(mealService) {
        this.mealService = mealService;
        this.searchTerms = new Subject();
        this.showSearchResults = false;
    }
    onDocumentClick() {
        this.showSearchResults = false;
    }
    ngOnInit() {
        this.ingredients$ = this.searchTerms.pipe(debounceTime(300), distinctUntilChanged(), 
        // Map ignores all string items except for the last comma separated value and removes minus sign
        map((term) => term.split(",").pop().replace("-", "").trim()), switchMap((term) => this.mealService.searchIngredients(term)));
    }
    // Push a search term into the observable stream
    search(term) {
        this.showSearchResults = true;
        this.queryString = term;
        this.searchTerms.next(term);
    }
    selectIngredient(ingredient) {
        // TODO: BUG: An additional space is being introduced somewhere
        this.incorporateSelectedIngredient(ingredient);
        // Clear search results
        this.searchTerms.next("");
        // TODO: clear this jank unit testing
        console.log(`Selected: ${ingredient}`);
        console.log("Current Query: " + this.queryString);
    }
    searchMeals() {
        // Clear current search results
        this.meals$ = of([]);
        // Return results based on new query string
        this.meals$ = this.mealService.searchMeals(this.queryString);
    }
    incorporateSelectedIngredient(ingredient) {
        var _a;
        // Splits query string into array, removes the last item, inserts the user selected ingredient, and updates the queryString
        let stringArray = (_a = this.queryString) === null || _a === void 0 ? void 0 : _a.split(",");
        let ingredientString = stringArray === null || stringArray === void 0 ? void 0 : stringArray.pop().trim();
        this.checkForMinusSign(ingredientString) ? stringArray === null || stringArray === void 0 ? void 0 : stringArray.push("-" + ingredient + ", ") : stringArray === null || stringArray === void 0 ? void 0 : stringArray.push(ingredient + ", ");
        //stringArray?.push(ingredient + ", ");
        let newString = stringArray === null || stringArray === void 0 ? void 0 : stringArray.join(", ");
        this.queryString = newString;
    }
    checkForMinusSign(term) {
        return term.slice(0, 1) === '-' ? true : false;
    }
};
__decorate([
    HostListener('document:click', ['$event'])
], MealSearchComponent.prototype, "onDocumentClick", null);
MealSearchComponent = __decorate([
    Component({
        selector: 'meal-search',
        templateUrl: './meal-search.component.html',
        styleUrls: ['./meal-search.component.css']
    })
], MealSearchComponent);
export { MealSearchComponent };
//# sourceMappingURL=meal-search.component.js.map