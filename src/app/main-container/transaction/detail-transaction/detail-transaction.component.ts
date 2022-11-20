import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ExpenseManagerService} from "../../../expense-manager.service";
import {Category} from "../../../expense-manager";
import * as dayjs from "dayjs";

@Component({
  selector: 'app-detail-transaction',
  templateUrl: './detail-transaction.component.html',
  styleUrls: ['./detail-transaction.component.scss']
})
export class DetailTransactionComponent implements OnInit {

  idTransaction: number;
  formGroupDetailTransaction!: FormGroup;
  listTransactionType: any[];
  listCategories: any[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private expenseManagerService: ExpenseManagerService
  ) {
    this.initAttribute();
    this.idTransaction = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.getDetailTransaction();
  }

  initAttribute() {
    this.listTransactionType = [{categoryGroupId: 1, categoryGroupName: 'income'}, {categoryGroupId: 2, categoryGroupName: 'expense'}];

    this.formGroupDetailTransaction = this.formBuilder.group({
      type: new FormControl('', [Validators.required]),
      note: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required])
    });

    this.formGroupDetailTransaction.get('type').valueChanges.subscribe((type) => {
      this.getCategoriesByCategoryGroupId(type.categoryGroupId);
    });
  }

  getDetailTransaction() {
    this.expenseManagerService.getDetailTransaction(this.idTransaction).subscribe({
      next: (transaction: any) => {
        this.formGroupDetailTransaction.get('type').setValue({categoryGroupId: transaction.category_group_id, categoryGroupName: transaction.category_group_name});
        this.formGroupDetailTransaction.get('note').setValue(transaction.note);
        this.formGroupDetailTransaction.get('category').setValue({category_id: transaction.category_id, category_name: transaction.category});
        this.formGroupDetailTransaction.get('amount').setValue(transaction.amount);
        this.formGroupDetailTransaction.get('date').setValue(dayjs(transaction.date).format('YYYY-MM-DD'));
      },
      error: () => {

      }
    });
  }

  compareCategory(o1: any, o2: any) {
    return o1.category_id === o2.category_id;
  }

  getCategoriesByCategoryGroupId(categoryGroupId) {
    this.expenseManagerService.getAllCategoriesByCategoryGroupId(categoryGroupId).subscribe({
      next: (result: Category[]) => {
        this.listCategories = result;
      }, error: () => {

      }
    });
  }

  submitEditTransaction() {
    const bodyRequest = {
      note: this.formGroupDetailTransaction.get('note').value.toString(),
      categoryId: Number(this.formGroupDetailTransaction.get('category').value.category_id),
      amount: this.formGroupDetailTransaction.get('amount').value,
      date: this.formGroupDetailTransaction.get('date').value.toString(),
    }

    this.expenseManagerService.editTransaction(this.idTransaction, bodyRequest).subscribe({
      next: () => {
        this.router.navigate(['list-transaction/all']);
      },
      error: () => {
      }
    });
  }

  deleteTransaction() {
    this.expenseManagerService.deleteTransaction(this.idTransaction).subscribe({
      next: () => {
        this.router.navigate(['list-transaction/all']);
      }
    });
  }

  cancelEditTransaction() {
    this.router.navigate(['list-transaction/all']);
  }

}
