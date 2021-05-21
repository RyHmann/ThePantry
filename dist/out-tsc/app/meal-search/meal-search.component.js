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
        this.incorporateSelectedIngredient(ingredient.name);
        this.searchTerms.next("");
    }
    searchMeals() {
        this.queryResult$ = of();
        this.queryResult$ = this.mealService.searchMeals(this.queryString);
        /*this.meals$ = this.queryResult$
            .pipe(
                map(meals => meals.Meals),
                tap(data => console.log('Meals: ', JSON.stringify(data)))
                );*/
    }
    incorporateSelectedIngredient(ingredient) {
        var _a;
        // Splits query string into array, removes the last item, inserts the user selected ingredient, and updates the queryString
        let stringArray = (_a = this.queryString) === null || _a === void 0 ? void 0 : _a.split(", ");
        let ingredientString = stringArray === null || stringArray === void 0 ? void 0 : stringArray.pop().trim();
        this.checkForMinusSign(ingredientString) ? stringArray === null || stringArray === void 0 ? void 0 : stringArray.push("-" + ingredient + ", ") : stringArray === null || stringArray === void 0 ? void 0 : stringArray.push(ingredient + ", ");
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