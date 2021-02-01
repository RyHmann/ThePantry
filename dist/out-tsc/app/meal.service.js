import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let MealService = class MealService {
    constructor(_http) {
        this._http = _http;
        this.mealsUrl = '/api/mealfinder/include?ingr=onion, tomato';
    }
    getMeals() {
        return this._http.get(this.mealsUrl);
    }
};
MealService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], MealService);
export { MealService };
//# sourceMappingURL=meal.service.js.map