import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  listTransactionRoutes: any[];

  constructor(
    private router: Router
  ) {
    this.initAttribute();
  }

  ngOnInit(): void {
  }

  initAttribute() {
    this.listTransactionRoutes = [
      {
        label: 'All Transactions',
        path: 'list-transaction/all'
      },
      {
        label: 'Incomes Transactions',
        path: 'list-transaction/incomes'
      },
      {
        label: 'Expenses Transactions',
        path: 'list-transaction/expenses'
      }
    ];


  }

  goToAddTransaction() {
    this.router.navigate(['add-transaction']);
  }

  logout() {
    sessionStorage.removeItem('user');
    this.router.navigate(['login']);
  }

}
