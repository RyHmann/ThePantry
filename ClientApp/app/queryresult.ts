import { Meal } from './meal';

export interface QueryResult {
    source: string;
    url: string;
    targetIngredients: string[];
    avoidedIngredients: string[];
    invalidIngredients: string[];
    meals: Meal[];
}