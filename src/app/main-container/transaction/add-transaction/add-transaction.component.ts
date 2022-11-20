import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
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
  listTransactionType: any[];
  listCategories: any[];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private expenseManagerService: ExpenseManagerService
  ) {
    this.initAttribute();
  }

  ngOnInit(): void {
    this.getCategoriesByCategoryGroupId(1);
  }

  initAttribute() {
    this.listTransactionType = [{categoryGroupId: 1, categoryGroupName: 'income'}, {categoryGroupId: 2, categoryGroupName: 'expense'}];
    this.listCategories = [];
    this.formGroupAddTransaction = this.formBuilder.group({
      type: new FormControl(this.listTransactionType[0], [Validators.required]),
      note: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required])
    });

    this.formGroupAddTransaction.get('type').valueChanges.subscribe((type) => {
      this.getCategoriesByCategoryGroupId(type.categoryGroupId);
    });

  }

  getCategoriesByCategoryGroupId(categoryGroupId) {
    this.expenseManagerService.getAllCategoriesByCategoryGroupId(categoryGroupId).subscribe({
      next: (result: Category[]) => {
        this.listCategories = result;
      }, error: () => {

      }
    });
  }

  submitAddTransaction() {
    const bodyRequest = {
      note: this.formGroupAddTransaction.get('note').value.toString(),
      categoryId: Number(this.formGroupAddTransaction.get('category').value),
      amount: this.formGroupAddTransaction.get('amount').value,
      date: this.formGroupAddTransaction.get('date').value.toString(),
    }
    this.expenseManagerService.addTransaction(bodyRequest).subscribe({
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
