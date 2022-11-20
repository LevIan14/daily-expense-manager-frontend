import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category, Transaction} from "./expense-manager";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ExpenseManagerService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllTransactionsByYear(year: string): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>(`${environment.urlApi}/transaction/list/${year}`);
  }

  getAllCategoriesByCategoryGroupId(categoryGroupId: number): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${environment.urlApi}/category/list/${categoryGroupId}`);
  }

  getDetailTransaction(id: number): Observable<Transaction> {
    return this.httpClient.get<Transaction>(`${environment.urlApi}/transaction/detail/${id}`);
  }

  getDetailCategory(categoryId: number): Observable<Category> {
    return this.httpClient.get<Category>(`${environment.urlApi}/category/detail/${categoryId}`);
  }

  getSavedAmount() {
    return this.httpClient.get<any>(`${environment.urlApi}/saved-amount/total`);
  }

  addTransaction(bodyRequest: any): Observable<Transaction> {
    return this.httpClient.post<Transaction>(`${environment.urlApi}/transaction/add`, bodyRequest);
  }

  editTransaction(idTransaction: number, bodyRequest) {
    return this.httpClient.put<any>(`${environment.urlApi}/transaction/update/${idTransaction}`, bodyRequest);
  }

  deleteTransaction(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${environment.urlApi}/transaction/delete/${id}`);
  }

  addCategory(bodyRequest: any): Observable<Category> {
    return this.httpClient.post<Category>(`${environment.urlApi}/category/add`, bodyRequest);
  }

  editCategory(categoryId: number, bodyRequest): Observable<Category> {
    return this.httpClient.put<Category>(`${environment.urlApi}/category/update/${categoryId}`, bodyRequest);
  }

  deleteCategory(categoryId: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(`${environment.urlApi}/category/delete/${categoryId}`);
  }



}
