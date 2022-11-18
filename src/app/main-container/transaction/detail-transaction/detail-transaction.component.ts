import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ExpenseManagerService} from "../../../expense-manager.service";
import {ExpenseManager} from "../../../expense-manager";

@Component({
  selector: 'app-detail-transaction',
  templateUrl: './detail-transaction.component.html',
  styleUrls: ['./detail-transaction.component.scss']
})
export class DetailTransactionComponent implements OnInit {

  idTransaction: string;
  formGroupDetailTransaction!: FormGroup;
  listTransactionType: string[];
  listCategories: any[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private expenseManagerService: ExpenseManagerService
  ) {
    this.initAttribute();
    this.idTransaction = this.activatedRoute.snapshot.queryParamMap.get('id');
  }

  ngOnInit(): void {
    this.getDetailTransaction();
  }

  initAttribute() {
    this.formGroupDetailTransaction = this.formBuilder.group({
      type: new FormControl(''),
      note: new FormControl(''),
      category: new FormControl(''),
      amount: new FormControl(''),
      date: new FormControl('')
    });
  }

  getDetailTransaction() {
    this.expenseManagerService.getDetailTransaction(this.idTransaction).subscribe({
      next: (transaction: ExpenseManager) => {
        this.formGroupDetailTransaction.get('type').setValue(transaction.type);
        this.formGroupDetailTransaction.get('note').setValue(transaction.note);
        this.formGroupDetailTransaction.get('category').setValue(transaction.category);
        this.formGroupDetailTransaction.get('amount').setValue(transaction.amount);
        this.formGroupDetailTransaction.get('date').setValue(transaction.date);
      },
      error: () => {

      }
    });
  }

  submitEditTransaction() {
    this.formGroupDetailTransaction.get('type').setValue(this.formGroupDetailTransaction.get('type').value.toString().toLowerCase());
    this.expenseManagerService.addTransaction(this.formGroupDetailTransaction.value).subscribe({
      next: () => {
        this.router.navigate(['list-transaction/all']);
      },
      error: () => {

      }
    });
  }

  cancelEditTransaction() {
    this.router.navigate(['list-transaction/all']);
  }

}
