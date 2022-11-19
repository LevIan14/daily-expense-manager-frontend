import {Component, Injectable, OnInit} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class RequestInterceptorComponent implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const encryptedUser = sessionStorage.getItem('encrypted');
    req = req.clone({
      setHeaders: {
        Authorization: `Basic ${encryptedUser}`,
      }
    })
    return next.handle(req);
  }

  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   req = req.clone({
  //     setHeaders: {
  //       Authorization: `Basic ${btoa()}`
  //     }
  //   })
  //   return next.handle(req);
  // }

}
