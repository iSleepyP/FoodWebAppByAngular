import { Recipes } from "./recipes/recipes.model";
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from "./shared/Ingredient.model";
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { Subject } from "rxjs/internal/Subject";

@Injectable()
export class RecipeService{
    //recipeSelected = new Subject<Recipes>();
    recipesChange = new Subject<Recipes[]>();

    private recipes:Recipes[]=[
        new Recipes('A test Recipe','This is simply a test',
        'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg',[
          new Ingredient('Meat',1),
          new Ingredient('French Fries',20)]),

        new Recipes('Another test Recipe','This is simply a test',
        'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg',[
          new Ingredient('Buns',2),
          new Ingredient('Meat',1)]),
      ];

      constructor(private slService:ShoppingListService){}

      getRecipes(){
        return this.recipes.slice();
      }

      getRecipe(index:number){
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe:Recipes){
        this.recipes.push(recipe);
        this.recipesChange.next(this.recipes.slice());//copy of recipes
      }

      updateRecipe(index:number,newRecipe:Recipes){
        this.recipes[index] = newRecipe;
        this.recipesChange.next(this.recipes.slice());
      }

      deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipesChange.next(this.recipes.slice());
      }

      setRecipes(recipes:Recipes[]){
        this.recipes = recipes;
        this.recipesChange.next(this.recipes.slice());
      }
}