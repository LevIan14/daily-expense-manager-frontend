import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  ListTransactionComponent
} from "./transaction/list-transaction-container/list-transaction/list-transaction.component";
import {AddTransactionComponent} from "./transaction/add-transaction/add-transaction.component";
import {DetailTransactionComponent} from "./transaction/detail-transaction/detail-transaction.component";
import {ListCategoriesComponent} from "./category/list-categories-container/list-categories/list-categories.component";
import {
  ListCategoriesIncomeComponent
} from "./category/list-categories-container/list-categories-income/list-categories-income.component";
import {
  ListCategoriesExpenseComponent
} from "./category/list-categories-container/list-categories-expense/list-categories-expense.component";
import {AddCategoryComponent} from "./category/add-category/add-category.component";
import {DetailCategoryComponent} from "./category/detail-category/detail-category.component";

const routes: Routes = [
  {
    path: 'list-transaction',
    children: [
      {
        path: '',
        redirectTo: 'all',
        pathMatch: 'full'
      },
      {
        path: 'all',
        component: ListTransactionComponent
      },
    ]
  },
  {
    path: 'add-transaction',
    component: AddTransactionComponent
  },
  {
    path: 'detail-transaction/:id',
    component: DetailTransactionComponent
  },
  {
    path: 'list-categories',
    children: [
      {
        path: '',
        redirectTo: 'all',
        pathMatch: 'full'
      },
      {
        path: 'all',
        component: ListCategoriesComponent
      }
    ]
  },
  {
    path: 'add-category',
    component: AddCategoryComponent
  },
  {
    path: 'detail-category/:id',
    component: DetailCategoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainContainerRoutingModule { }
