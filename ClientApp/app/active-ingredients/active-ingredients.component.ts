import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QueryResult } from '../queryresult';

@Component({
  selector: 'active-ingredients',
  templateUrl: './active-ingredients.component.html',
  styleUrls: ['./active-ingredients.component.css']
})
export class ActiveIngredientsComponent implements OnInit {
    @Input() userIngredients: Observable<QueryResult> | undefined;
    @Input() invalidIngredients: string[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

    invalidIngredientsPresent(array: string[]): boolean {
        return (array.length > 0 ? true : false);
    }
}
