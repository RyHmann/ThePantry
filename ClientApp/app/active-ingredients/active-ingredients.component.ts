import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'active-ingredients',
  templateUrl: './active-ingredients.component.html',
  styleUrls: ['./active-ingredients.component.css']
})
export class ActiveIngredientsComponent implements OnInit {
    @Input() invalidIngredients: string[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
