import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {AddTransactionComponent} from './transaction/add-transaction/add-transaction.component';
import {ListTransactionComponent} from './transaction/list-transaction-container/list-transaction/list-transaction.component';
import {HttpClientModule} from "@angular/common/http";
import { ListTransactionContainerComponent } from './transaction/list-transaction-container/list-transaction-container.component';
import {ListIncomesComponent} from "./transaction/list-transaction-container/list-incomes/list-incomes.component";
import {ListExpensesComponent} from "./transaction/list-transaction-container/list-expenses/list-expenses.component";
import {ReactiveFormsModule} from "@angular/forms";
import { ListCategoriesContainerComponent } from './category/list-categories-container/list-categories-container.component';
import { ListCategoriesExpenseComponent } from './category/list-categories-container/list-categories-expense/list-categories-expense.component';
import { ListCategoriesIncomeComponent } from './category/list-categories-container/list-categories-income/list-categories-income.component';
import { ListCategoriesComponent } from './category/list-categories-container/list-categories/list-categories.component';
import { TransactionComponent } from './transaction/transaction.component';
import { CategoryComponent } from './category/category.component';
import { DetailTransactionComponent } from './transaction/detail-transaction/detail-transaction.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { DetailCategoryComponent } from './category/detail-category/detail-category.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddTransactionComponent,
    ListTransactionComponent,
    ListIncomesComponent,
    ListExpensesComponent,
    ListTransactionContainerComponent,
    ListCategoriesContainerComponent,
    ListCategoriesExpenseComponent,
    ListCategoriesIncomeComponent,
    ListCategoriesComponent,
    TransactionComponent,
    CategoryComponent,
    DetailTransactionComponent,
    AddCategoryComponent,
    DetailCategoryComponent,
    EmptyRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
