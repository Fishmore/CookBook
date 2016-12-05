import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";

import { SharedModule } from "../shared/shared.module";

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list-add.component';

const SHOPPING_LIST_ROUTES: Routes = [
    { path: '', component: ShoppingListComponent }
];

@NgModule({
    declarations: [ ShoppingListComponent, ShoppingListAddComponent ],
    imports: [ FormsModule, SharedModule, RouterModule.forChild(SHOPPING_LIST_ROUTES) ]
})

export class ShoppingListModule {}