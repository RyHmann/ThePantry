import { Ingredient } from './ingredient';

export interface ActiveIngredient {
    ingredient: Ingredient;
    isDesired: boolean;
    isRecognized: boolean;
}