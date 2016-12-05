import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { DropdownDirective } from './dropdown.directive';
import { SigninComponent } from './authentication/signin.component';
import { SignupComponent } from './authentication/signup.component';

import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService} from './shopping-list/shopping-list.service';
import { AuthService } from './authentication/auth.service';
import { AuthGuard } from './authentication/auth.guard';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
    { path: 'recipes', loadChildren: 'app/recipes/recipes.module#RecipesModule', canActivate: [AuthGuard] },
    { path: 'shopping-list', loadChildren: 'app/shopping-list/shopping-list.module#ShoppingListModule', canActivate: [AuthGuard]},
    { path: 'sign-up', component: SignupComponent },
    { path: 'sign-in', component: SigninComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    SigninComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    RecipeService,
    ShoppingListService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
