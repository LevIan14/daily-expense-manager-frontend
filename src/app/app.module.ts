import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {AddTransactionComponent} from './main-container/transaction/add-transaction/add-transaction.component';
import {ListTransactionComponent} from './main-container/transaction/list-transaction-container/list-transaction/list-transaction.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ListTransactionContainerComponent } from './main-container/transaction/list-transaction-container/list-transaction-container.component';
import {ListIncomesComponent} from "./main-container/transaction/list-transaction-container/list-incomes/list-incomes.component";
import {ListExpensesComponent} from "./main-container/transaction/list-transaction-container/list-expenses/list-expenses.component";
import {ReactiveFormsModule} from "@angular/forms";
import { ListCategoriesContainerComponent } from './main-container/category/list-categories-container/list-categories-container.component';
import { ListCategoriesExpenseComponent } from './main-container/category/list-categories-container/list-categories-expense/list-categories-expense.component';
import { ListCategoriesIncomeComponent } from './main-container/category/list-categories-container/list-categories-income/list-categories-income.component';
import { ListCategoriesComponent } from './main-container/category/list-categories-container/list-categories/list-categories.component';
import { TransactionComponent } from './main-container/transaction/transaction.component';
import { CategoryComponent } from './main-container/category/category.component';
import { DetailTransactionComponent } from './main-container/transaction/detail-transaction/detail-transaction.component';
import { AddCategoryComponent } from './main-container/category/add-category/add-category.component';
import { DetailCategoryComponent } from './main-container/category/detail-category/detail-category.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { RequestInterceptorComponent } from './shared/request-interceptor/request-interceptor.component';
import { LoginComponent } from './login/login.component';
import { MainContainerComponent } from './main-container/main-container.component';

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
    EmptyRouteComponent,
    LoginComponent,
    MainContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorComponent, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
