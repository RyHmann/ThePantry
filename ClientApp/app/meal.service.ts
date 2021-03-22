import { Injectable } from '@angular/core';
import { Meal } from './meal';
import { Ingredient } from './ingredient';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { ActiveIngredient } from './activeingredient';

@Injectable({
  providedIn: 'root'
})
export class MealService {
    private mealsUrl = '/api/mealfinder/include?ingr=';
    private ingredientsUrl = '/api/ingredient/';
    private activeIngredientsUrl = '/api/ingredient/include?ing=';

    constructor(private _http: HttpClient) { }

    getMeals(): Observable<Meal[]> {
        return this._http.get<Meal[]>(this.mealsUrl);
    }

    searchMeals(term: string): Observable<Meal[]> {
        if (!term.trim) {
            return of([]);
        }
        return this._http.get<Meal[]>(`${this.mealsUrl}${term}`)
            .pipe(
                tap(x => x.length ? 
                    console.log(`Found meals matching "${term}"`) :
                    console.log(`No meals matching "${term}"`)),
                catchError(this.handleError<Meal[]>('searchMeals', []))
                    );
    }

    searchIngredients(term: string): Observable<Ingredient[]> {
        if (term.trim().length < 3) {
            return of([]);
        }
        return this._http.get<Ingredient[]>(`${this.ingredientsUrl}${term}`)
            .pipe(
                tap(x => x.length ? 
                    console.log(`Found ingredients matching "${term}"`) :
                    console.log(`No ingredients matching "${term}"`)),
                catchError(this.handleError<Ingredient[]>('searchIngredients', []))
            );
    }

    confirmIngredients(term: string): Observable<ActiveIngredient[]> {
        return this._http.get<ActiveIngredient[]>(`${this.activeIngredientsUrl}${term}`)
            .pipe(
                tap(x => x.length ?
                    console.log("Found active ingredients.") :
                    console.log("Found no active ingredients.")),
                    catchError(this.handleError<ActiveIngredient[]>('confirmIngredients', []))
                );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            console.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        }
    }
}

