import { Component, OnInit, Input } from '@angular/core';
import { Meal } from '../meal';

@Component({
  selector: 'meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.css']
})
export class MealDetailComponent implements OnInit {

    @Input() meal: Meal | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
