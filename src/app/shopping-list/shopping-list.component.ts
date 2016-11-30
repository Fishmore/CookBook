import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient';

@Component({
  selector: 'cb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[] = [];

  constructor() { }

  ngOnInit() {
  }

}
