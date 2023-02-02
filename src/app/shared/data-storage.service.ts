import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { RecipeService } from "../recipe.service";
import { Recipes } from "../recipes/recipes.model";
import { map, tap } from "rxjs/operators";


@Injectable({providedIn:'root'})
export class DataStorageService{
    constructor(private http:HttpClient,private recipeService:RecipeService){}

    storeRecipes(){
        const recipes = this.recipeService.getRecipes();
        this.http.post('https://ng-food-app-4fe3e-default-rtdb.firebaseio.com/recipes.json',recipes).subscribe(response => {
            console.log(response);
        });
    }

    fetchRecipes(){
        return this.http.get<Recipes[]>('https://ng-food-app-4fe3e-default-rtdb.firebaseio.com/recipes.json').pipe(
            map(recipes => {
                return recipes.map(recipe => {
                    return {...recipe,ingredients:recipe.ingredients ? recipe.ingredients:[]};
                });
            }),
            tap(recipes => {
                this.recipeService.setRecipes(recipes);
            })
        )
    }
}