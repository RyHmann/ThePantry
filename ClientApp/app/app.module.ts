import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MealSearchComponent } from './meal-search/meal-search.component';
import { MealDetailComponent } from './meal-detail/meal-detail.component';
import { MealsComponent } from './meals/meals.component';


@NgModule({
  declarations: [
    AppComponent,
    MealSearchComponent,
    MealDetailComponent,
    MealsComponent,
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule
  ],
    providers: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
