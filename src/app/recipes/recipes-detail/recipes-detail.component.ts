import { Component, /*Input*/ OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router } from '@angular/router'
import { Recipes } from '../recipes.model';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit{
    //@Input() recipe:Recipes;
    recipe:Recipes;
    id:number;

    constructor(private recipeService:RecipeService,
                private route:ActivatedRoute,
                private router:Router){

    }

    ngOnInit(): void {
      //const id = this.route.snapshot.params['id']; //ใช้ได้แค่ครั้งแรกครั้งเดียว
      this.route.params.subscribe( //ดึงค่าจาก url มาใช้
        (params:Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
    }

    onAddToShoppingList(){
      this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
      //this.router.navigate(['../shopping-list'],{relativeTo:this.route});
    }

    onEditRecipe(){
      this.router.navigate(['edit'],{relativeTo:this.route});
      //this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route});
    }

    onDeleteRecipe(){
      this.recipeService.deleteRecipe(this.id);
      this.router.navigate(['/recipes'])
    }
}
