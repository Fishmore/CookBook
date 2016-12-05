import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";

import { SharedModule } from "../shared/shared.module";

import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipe-start.component';

const RECIPE_ROUTES: Routes = [
    { path: '', component: RecipesComponent, children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent },
        { path: ':id', component: RecipeDetailComponent },
        { path: ':id/edit', component: RecipeEditComponent }
    ]}
]; 

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeListComponent,
        RecipeEditComponent,
        RecipeItemComponent,
        RecipeDetailComponent,
        RecipeStartComponent,
    ],
    imports: [ ReactiveFormsModule, SharedModule, RouterModule.forChild(RECIPE_ROUTES) ]
})

export class RecipesModule {}