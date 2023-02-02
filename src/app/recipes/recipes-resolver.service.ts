import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

import { Recipes } from "./recipes.model";
import { DataStorageService } from "../shared/data-storage.service";
import { Observable } from "rxjs";
import { RecipeService } from "../recipe.service";

@Injectable({providedIn:'root'})
export class RecipesResolverService implements Resolve<Recipes[]>{
    constructor(private dataStorageService:DataStorageService,private recipesService:RecipeService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipes[] | Observable<Recipes[]> | Promise<Recipes[]> {
        const recipes = this.recipesService.getRecipes();

        if(recipes.length === 0){
            return this.dataStorageService.fetchRecipes();
        }else{
            return recipes;
        }
        //return this.dataStorageService.fetchRecipes();
    }
}