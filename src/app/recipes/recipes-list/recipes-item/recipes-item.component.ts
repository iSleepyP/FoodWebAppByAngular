import { Component, Input, OnInit } from '@angular/core';
import { Recipes } from '../../recipes.model';
//import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit{
  @Input() recipe:Recipes;
  @Input() index:number;
  
  //constructor(private recipeService:RecipeService){}

  ngOnInit(): void {
    
  }

  /*onSelected(){
      this.recipeService.recipeSelected.emit(this.recipe)
  }*/
}
