import { Iingredient } from "./ingredient";

export interface IMeal {
    Title: string;
    Description: string;
    Instructions: string;
    Ingredients: Iingredient[];
    ThumbnailUrl: string;
}