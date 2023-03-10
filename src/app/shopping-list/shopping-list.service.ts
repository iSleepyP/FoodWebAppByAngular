import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/Ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService{
ingredientsChanged = new Subject<Ingredient[]>();
startedEditting = new Subject<number>();

    private ingredients:Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',10),
      ];

      getIngredients(){
        return this.ingredients.slice();//slice a copy of data
      }

      getIngerdient(index:number){
        return this.ingredients[index];
      }

      addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
      }

      addIngredients(ingredients:Ingredient[]){
        //for(let ingredient of ingredients){
        //    this.addIngredient(ingredient);
        //}
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
      }

      updateIngrediant(index:number,newIngredient:Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
      }

      deleteIngredient(index:number){
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice());
      }
}