import { Ingredient } from './ingredient';

export interface Meal {
    name: string;
    description: string;
    instructions: string;
    ingredients: Ingredient[];
    thumbnail: string;
    url: string;

}