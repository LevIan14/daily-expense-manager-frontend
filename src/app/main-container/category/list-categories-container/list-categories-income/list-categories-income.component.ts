import { Component, OnInit } from '@angular/core';
import {ExpenseManagerService} from "../../../../expense-manager.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-list-categories-income',
  templateUrl: './list-categories-income.component.html',
  styleUrls: ['./list-categories-income.component.scss']
})
export class ListCategoriesIncomeComponent implements OnInit {

  constructor(
    private expenseManagerService: ExpenseManagerService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }



}
