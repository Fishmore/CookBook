import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Chicken Breast', 'Increase Max Health by 421 for 35 minutes', '/ESO_Food/Chicken Breast.png', [
      new Ingredient('poultry', 1)
    ]),
    new Recipe('Fishy Stick', 'Increase Max Health by 421 for 35 minutes', '/ESO_Food/Fishy Stick.png', [
      new Ingredient('fish', 1)
    ]),
    new Recipe('Roast Pig', 'Increase Max Health by 421 for 35 minutes', '/ESO_Food/Roast Pig.png', [
      new Ingredient('white meat', 1)
    ])
  ];

  constructor(private http: Http) { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(recipeIndex: number) {
    return this.recipes[recipeIndex];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://eso-provisioning.firebaseio.com/food-recipes.json', body, {headers: headers});
  }

  fetchData() {
    return this.http.get('https://eso-provisioning.firebaseio.com/food-recipes.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Recipe[]) => {
          this.recipes = data;
          this.recipesChanged.emit(this.recipes);
        }
      );
  }
}
