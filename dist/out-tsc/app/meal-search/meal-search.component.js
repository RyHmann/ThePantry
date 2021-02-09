import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
let MealSearchComponent = class MealSearchComponent {
    constructor(mealService) {
        this.mealService = mealService;
        this.searchTerms = new Subject();
    }
    // Push a search term into the observable stream
    search(term) {
        this.searchTerms.next(term);
    }
    ngOnInit() {
        this.ingredients$ = this.searchTerms.pipe(debounceTime(300), distinctUntilChanged(), map((term) => term.split(",").pop().trim()), switchMap((term) => this.mealService.searchIngredients(term)));
    }
    selectIngredient(ingredient) {
        var _a;
        (_a = this.ingredientString) === null || _a === void 0 ? void 0 : _a.concat(ingredient);
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