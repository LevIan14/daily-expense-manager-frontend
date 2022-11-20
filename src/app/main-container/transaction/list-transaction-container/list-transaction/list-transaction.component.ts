import {Component, OnInit} from '@angular/core';
import {ExpenseManagerService} from "../../../../expense-manager.service";
import * as dayjs from "dayjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-transaction',
  templateUrl: './list-transaction.component.html',
  styleUrls: ['./list-transaction.component.scss']
})
export class ListTransactionComponent implements OnInit {

  year: string;
  listTransaction: any[];
  savedAmount: number;

  constructor(
    private expenseManagerService: ExpenseManagerService,
    private router: Router
  ) {
    this.initAttribute();
  }

  ngOnInit(): void {
    this.getSavedAmount();
    this.getAllTransactions(this.year);
  }

  initAttribute() {
    this.year = dayjs().year().toString();
    this.savedAmount = 0;
  }

  getSavedAmount() {
    this.expenseManagerService.getSavedAmount().subscribe({
      next: (result) => {
        this.savedAmount = result;
      }
    });
  }

  getAllTransactions(year: string) {
    this.expenseManagerService.getAllTransactionsByYear(year).subscribe({
      next: (result) => {
        this.listTransaction = result;
      },
      error: () => {
      }
    });
  }

  fetchTransactions(event) {
    this.year = event.target.value;
    this.getAllTransactions(this.year);
  }

  goToDetailTransaction(transactionId: number) {
    this.router.navigate(['detail-transaction', transactionId]);
  }
}
