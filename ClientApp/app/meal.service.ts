import { Injectable } from '@angular/core';
import { Meal } from './meal';
import { Ingredient } from './ingredient';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { QueryResult } from './queryresult';

@Injectable({
  providedIn: 'root'
})
export class MealService {
    private mealsUrl = '/api/mealfinder/include?ingr=';
    private ingredientsUrl = '/api/ingredient/';

    constructor(private _http: HttpClient) { }

    getMeals(): Observable<Meal[]> {
        return this._http.get<Meal[]>(this.mealsUrl);
    }

    searchMeals(term: string): Observable<QueryResult> {
        if (!term.trim) {
            return of();
        }
        return this._http.get<QueryResult>(`${this.mealsUrl}${term}`)
            .pipe(
                tap(x => typeof x != "undefined" ? 
                    console.log(`Found meals matching "${term}"`) :
                    console.log(`No meals matching "${term}"`)),
                catchError(this.handleError<QueryResult>('searchMeals', ))
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

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            console.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        }
    }
}

