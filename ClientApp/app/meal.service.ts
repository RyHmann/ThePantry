import { Injectable } from '@angular/core';
import { Meal } from './meal';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MealService {
    private mealsUrl = '/api/mealfinder/include?ingr=onion, tomato'

    constructor(private _http: HttpClient) { }

    getMeals(): Observable<Meal[]> {
        return this._http.get<Meal[]>(this.mealsUrl);
    }
}
