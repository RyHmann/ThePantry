import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'target-ingredients',
  templateUrl: './target-ingredients.component.html',
  styleUrls: ['./target-ingredients.component.css']
})
export class TargetIngredientsComponent implements OnInit {

    @Input() userIngredients: string[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
