import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {ExpenseManagerService} from "../../../expense-manager.service";
import {Category} from "../../../expense-manager";

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss']
})
export class AddTransactionComponent implements OnInit {
  formGroupAddTransaction!: FormGroup;
  listTransactionType: string[];
  listCategories: any[];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private expenseManagerService: ExpenseManagerService
  ) {
    this.initAttribute();
  }

  ngOnInit(): void {
    this.getCategoriesByGroupName();
  }

  initAttribute() {
    this.formGroupAddTransaction = this.formBuilder.group({
      type: new FormControl('Income'),
      note: new FormControl(''),
      category: new FormControl(''),
      amount: new FormControl(''),
      date: new FormControl('')
    });

    this.listTransactionType = ['Income', 'Expense'];
  }

  getCategoriesByGroupName() {
    this.expenseManagerService.getAllCategories(this.formGroupAddTransaction.get('type').value.toString()).subscribe({
      next: (result: Category[]) => {
        this.listCategories = result;
      }, error: () => {

      }
    });
  }

  submitAddTransaction() {
    this.formGroupAddTransaction.get('type').setValue(this.formGroupAddTransaction.get('type').value.toString().toLowerCase());
    this.expenseManagerService.addTransaction(this.formGroupAddTransaction.value).subscribe({
      next: () => {
        this.router.navigate(['list-transaction/all']);
      },
      error: () => {

      }
    });
  }

  cancelTransaction() {
    this.router.navigate(['list-transaction/all']);
  }

}
