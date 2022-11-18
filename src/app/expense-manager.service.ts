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
    return this.httpClient.get<ExpenseManager[]>(`${environment.urlApi}`);
  }

  getAllCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${environment.urlApi}`);
  }

  getDetailTransaction(id: string): Observable<ExpenseManager> {
    return this.httpClient.get<ExpenseManager>(`${environment.urlApi}`);
  }

  addTransaction(bodyRequest: ExpenseManager): Observable<ExpenseManager> {
    return this.httpClient.post<ExpenseManager>(`${environment.urlApi}`, bodyRequest);
  }

  addCategory(bodyRequest: Category): Observable<Category> {
    return this.httpClient.post<Category>(`${environment.urlApi}`, bodyRequest);
  }
}
