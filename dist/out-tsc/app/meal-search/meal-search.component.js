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
        this.queryString = term;
        console.log(this.queryString);
        this.searchTerms.next(term);
    }
    ngOnInit() {
        this.ingredients$ = this.searchTerms.pipe(debounceTime(300), distinctUntilChanged(), 
        // Map ignores all string items except for the last comma separated value
        map((term) => term.split(",").pop().trim()), switchMap((term) => this.mealService.searchIngredients(term)));
    }
    selectIngredient(ingredient) {
        var _a;
        let newString = (_a = this.queryString) === null || _a === void 0 ? void 0 : _a.concat(ingredient + ", ");
        this.queryString = newString;
        console.log(`Selected: ${ingredient}`);
        console.log("Current Query: " + newString);
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