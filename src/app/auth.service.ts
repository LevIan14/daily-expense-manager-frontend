import {Injectable} from '@angular/core';
import {User} from "./expense-manager";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) { }

  authenticate(username: string): Observable<User> {
    return this.httpClient.get<User>(`${environment.urlApi}/user/get-detail-user/${username}`);
  }
}
