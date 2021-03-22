import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Meal } from '../meal';

@Component({
  selector: 'active-ingredients',
  templateUrl: './active-ingredients.component.html',
  styleUrls: ['./active-ingredients.component.css']
})
export class ActiveIngredientsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
