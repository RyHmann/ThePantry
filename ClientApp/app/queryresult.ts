import { Meal } from './meal';

export interface QueryResult {
    Source: string;
    URL: string;
    ValidIngredients: string[];
    InvalidIngredients: string[];
    Meals: Meal[];
}