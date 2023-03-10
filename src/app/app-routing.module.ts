import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";

import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipesDetailComponent } from "./recipes/recipes-detail/recipes-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipesResolverService } from "./recipes/recipes-resolver.service";

const appRoutes:Routes = [
    { path: '',redirectTo: '/recipes' , pathMatch:'full' },
    { path: 'recipes',component: RecipesComponent, children:[
        { path: '' ,component:RecipeStartComponent },
        { path: 'new',component: RecipeEditComponent },
        { path: ':id', component:RecipesDetailComponent,resolve:[RecipesResolverService] },
        { path: ':id/edit',component: RecipeEditComponent,resolve:[RecipesResolverService] },
    ] },
    { path: 'shopping-list',component: ShoppingListComponent },
    
  
]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]//this is extra module so export to main ngModule
})

export class AppRoutingModule{

}