import { Component, OnInit } from '@angular/core';
import {ExpenseManagerService} from "../../../../expense-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss']
})
export class ListCategoriesComponent implements OnInit {
  listCategoriesIncome: any[];
  listCategoriesExpense: any[];

  constructor(
    private expenseManagerService: ExpenseManagerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getListCategoriesIncome();
    this.getListCategoriesExpense();
  }

  getListCategoriesIncome() {
    this.expenseManagerService.getAllCategoriesByCategoryGroupId(1).subscribe({
      next: (result) => {
        this.listCategoriesIncome = result;
        console.log(result)
      }
    });
  }

  getListCategoriesExpense() {
    this.expenseManagerService.getAllCategoriesByCategoryGroupId(2).subscribe({
      next: (result) => {
        this.listCategoriesExpense = result;
      }
    });
  }

  goToDetailCategory(categoryId: number) {
    console.log(categoryId)
    this.router.navigate(['detail-category', categoryId]);
  }

}
