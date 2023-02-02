import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs-compat';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy{
    ingredients:Ingredient[];
    private subscription:Subscription;

    constructor(private slService:ShoppingListService){

    }

    ngOnInit(): void {
      this.ingredients = this.slService.getIngredients();
      this.subscription = this.slService.ingredientsChanged.subscribe(
        (ingredient:Ingredient[]) => {
          this.ingredients = ingredient;
        } 
      )
    }
    
    onEditItem(index:number){
      this.slService.startedEditting.next(index);
    }

    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }

    

   
}
