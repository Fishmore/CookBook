import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'cb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Chicken Breast', 'Increase Max Health by 421 for 35 minutes', '/ESO_Food/Chicken Breast.png', []),
    new Recipe('Fishy Stick', 'Increase Max Health by 421 for 35 minutes', '/ESO_Food/Fishy Stick.png', []),
    new Recipe('Roast Pig', 'Increase Max Health by 421 for 35 minutes', '/ESO_Food/Roast Pig.png', [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
