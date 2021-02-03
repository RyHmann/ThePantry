import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
let MealService = class MealService {
    constructor(_http) {
        this._http = _http;
        this.mealsUrl = '/api/mealfinder/include?ingr=';
    }
    getMeals() {
        return this._http.get(this.mealsUrl);
    }
    searchMeals(term) {
        if (!term) {
            return of([]);
        }
        return this._http.get(`${this.mealsUrl}${term}}`);
    }
};
MealService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], MealService);
export { MealService };
//# sourceMappingURL=meal.service.js.map