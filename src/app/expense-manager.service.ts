import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category, ExpenseManager} from "./expense-manager";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ExpenseManagerService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllTransactionsByYear(year: string): Observable<ExpenseManager[]> {
    return this.httpClient.get<ExpenseManager[]>(`${environment.urlApi}/transaction/list/${year}`);
  }

  getAllCategories(categoryGroup: string): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${environment.urlApi}/category/list/${categoryGroup}`);
  }

  getDetailTransaction(id: string): Observable<ExpenseManager> {
    return this.httpClient.get<ExpenseManager>(`${environment.urlApi}`);
  }

  getDetailCategory(categoryId: number, userId: number): Observable<Category> {
    return this.httpClient.get<Category>(`${environment.urlApi}/category/detail/${categoryId}/${userId}`);
  }

  addTransaction(bodyRequest: ExpenseManager): Observable<ExpenseManager> {
    return this.httpClient.post<ExpenseManager>(`${environment.urlApi}`, bodyRequest);
  }

  addCategory(bodyRequest: Category): Observable<Category> {
    return this.httpClient.post<Category>(`${environment.urlApi}`, bodyRequest);
  }

  editCategory(bodyRequest): Observable<Category> {
    return this.httpClient.put<Category>(`${environment.urlApi}/category/update`, bodyRequest);
  }

  deleteCategory(categoryId: number, userId: number): Observable<void> {
    return this.httpClient.delete<void>(`${environment.urlApi}/delete/${categoryId}&${userId}`);
  }



}
