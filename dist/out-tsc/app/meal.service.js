import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
let MealService = class MealService {
    constructor(_http) {
        this._http = _http;
        this.mealsUrl = '/api/mealfinder/include?ingr=';
        this.ingredientsUrl = '/api/ingredient/';
    }
    getMeals() {
        return this._http.get(this.mealsUrl);
    }
    searchMeals(term) {
        if (!term.trim) {
            return of();
        }
        return this._http.get(`${this.mealsUrl}${term}`)
            .pipe(tap(x => typeof x != "undefined" ?
            console.log(`Found meals matching "${term}"`) :
            console.log(`No meals matching "${term}"`)), catchError(this.handleError('searchMeals')));
    }
    searchIngredients(term) {
        if (term.trim().length < 3) {
            return of([]);
        }
        return this._http.get(`${this.ingredientsUrl}${term}`)
            .pipe(tap(x => x.length ?
            console.log(`Found ingredients matching "${term}"`) :
            console.log(`No ingredients matching "${term}"`)), catchError(this.handleError('searchIngredients', [])));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error);
            console.log(`${operation} failed: ${error.message}`);
            return of(result);
        };
    }
};
MealService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], MealService);
export { MealService };
//# sourceMappingURL=meal.service.js.map