import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'target-ingredients',
  templateUrl: './target-ingredients.component.html',
  styleUrls: ['./target-ingredients.component.css']
})
export class TargetIngredientsComponent implements OnInit {

    @Input() userIngredients: string[] | undefined;
    @Output() ingredientRemoved = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

    flagIngredientForRemoval(ingredient: string): void {
        console.log(ingredient);
        this.ingredientRemoved.emit(ingredient);
    }
}
