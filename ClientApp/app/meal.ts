import { MealIngredient } from './mealingredient';

export interface Meal {
    name: string;
    description: string;
    ingredients: MealIngredient[];

}