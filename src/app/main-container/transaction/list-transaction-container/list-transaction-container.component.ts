import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-transaction-container',
  templateUrl: './list-transaction-container.component.html',
  styleUrls: ['./list-transaction-container.component.scss']
})
export class ListTransactionContainerComponent implements OnInit {

  listTypeTransaction: any[];

  constructor() {
    this.initAttribute();
  }

  ngOnInit(): void {
  }

  initAttribute() {
    this.listTypeTransaction = [
      {
        label: 'All',
        selected: true
      },
      {
        label: 'Income',
        selected: false
      },
      {
        label: 'Expense',
        selected: false
      }];
  }

  getHref() {
    console.log('hai')
  }

}
