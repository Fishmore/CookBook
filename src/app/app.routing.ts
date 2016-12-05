import { Routes, RouterModule } from "@angular/router";

import { RecipesComponent } from './recipes/recipes.component';
import { RECIPE_ROUTES } from "./recipes/recipe.routes";
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SignupComponent } from './authentication/signup.component';
import { SigninComponent } from './authentication/signin.component';
import { AuthGuard } from './authentication/auth.guard';


const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent, children: RECIPE_ROUTES, canActivate: [AuthGuard] },
    { path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthGuard] },
    { path: 'sign-up', component: SignupComponent },
    { path: 'sign-in', component: SigninComponent }
];

export const routing  = RouterModule.forRoot(APP_ROUTES);