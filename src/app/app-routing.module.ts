import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddTransactionComponent} from "./transaction/add-transaction/add-transaction.component";
import {ListIncomesComponent} from "./transaction/list-transaction-container/list-incomes/list-incomes.component";
import {ListExpensesComponent} from "./transaction/list-transaction-container/list-expenses/list-expenses.component";
import {
  ListTransactionComponent
} from "./transaction/list-transaction-container/list-transaction/list-transaction.component";
import {ListCategoriesComponent} from "./category/list-categories-container/list-categories/list-categories.component";
import {
  ListCategoriesIncomeComponent
} from "./category/list-categories-container/list-categories-income/list-categories-income.component";
import {
  ListCategoriesExpenseComponent
} from "./category/list-categories-container/list-categories-expense/list-categories-expense.component";
import {EmptyRouteComponent} from "./empty-route/empty-route.component";
import {DetailTransactionComponent} from "./transaction/detail-transaction/detail-transaction.component";
import {AddCategoryComponent} from "./category/add-category/add-category.component";
import {DetailCategoryComponent} from "./category/detail-category/detail-category.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-transaction/all',
    pathMatch: 'full'
  },
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
      {
        path: 'incomes',
        component: ListIncomesComponent
      },
      {
        path: 'expenses',
        component: ListExpensesComponent
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
      },
      {
        path: 'incomes',
        component: ListCategoriesIncomeComponent
      },
      {
        path: 'expenses',
        component: ListCategoriesExpenseComponent
      },
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
  {
    path: '404',
    component: EmptyRouteComponent
  },
  {
    path: '**',
    redirectTo: '404'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
