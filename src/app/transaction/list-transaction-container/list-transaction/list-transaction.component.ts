import { Component, OnInit } from '@angular/core';
import {ExpenseManagerService} from "../../../expense-manager.service";
import * as dayjs from "dayjs";

@Component({
  selector: 'app-list-transaction',
  templateUrl: './list-transaction.component.html',
  styleUrls: ['./list-transaction.component.scss']
})
export class ListTransactionComponent implements OnInit {

  year: string;

  constructor(
    private expenseManagerService: ExpenseManagerService
  ) {
    this.initAttribute();
  }

  ngOnInit(): void {
    this.getAllTransactions();
  }

  initAttribute() {
    this.year = dayjs().year().toString();
  }

  getAllTransactions() {
    this.expenseManagerService.getAllTransactionsByYear(this.year).subscribe({
      next: () => {

      },
      error: () => {

      }
    });
  }
}
