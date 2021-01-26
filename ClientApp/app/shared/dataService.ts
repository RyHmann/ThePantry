﻿import { IMeal } from "../meals/meal";


export class DataService {
    meals: IMeal[] = [{
        Title: "Recipe #1",
        Description: "A delicious recipe.",
        Instructions: "",
        Ingredients: [{ "Name": "Onion" }],
        ThumbnailUrl: "C:/Repos/csharp/Projects/ThePantry/ClientApp/assets/thumbnails/pinchofyum_arrozconpollo.jpeg"
    }, {
        Title: "Recipe #2",
        Description: "A delicious recipe.",
        Instructions: "",
        Ingredients: [{ "Name": "Onion" }],
        ThumbnailUrl: "assets/thumbnails/pinchofyum_coconutlimegrilledchickenandrice.jpeg"
    }, {
        Title: "Pork 'n Beans",
        Description: "A delicious recipe.",
        Instructions: "",
        Ingredients: [{ "Name": "Onion" }],
        ThumbnailUrl: "assets/thumbnails/pinchofyum_elotequeso.jpeg"
    }];
}