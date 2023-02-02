import { Component, OnDestroy, OnInit} from '@angular/core';
import { Recipes } from '../recipes.model';
import { RecipeService } from 'src/app/recipe.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit,OnDestroy{
  
  recipes:Recipes[];
  subscription:Subscription;

  constructor(private recipeService:RecipeService,
              private router:Router,
              private route:ActivatedRoute){

  }
  
  ngOnInit(): void {
    this.subscription = this.recipeService.recipesChange.subscribe(
      (recipes:Recipes[]) => {
        this.recipes = recipes;
      }
    )
    this.recipes=this.recipeService.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route});//เปลี่ยน url เป็น /recipes/new
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  
}
