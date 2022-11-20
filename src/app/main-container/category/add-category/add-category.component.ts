import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ExpenseManagerService} from "../../../expense-manager.service";

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  formGroupAddCategory!: FormGroup;
  listTransactionType: any[];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private expenseManagerService: ExpenseManagerService
  ) {
    this.initAttribute();
  }

  ngOnInit(): void {
  }

  initAttribute() {
    this.listTransactionType = [{categoryGroupId: 1, categoryGroupName: 'income'}, {categoryGroupId: 2, categoryGroupName: 'expense'}];

    this.formGroupAddCategory = this.formBuilder.group({
      type: new FormControl(this.listTransactionType[0], [Validators.required]),
      name: new FormControl('', [Validators.required])
    });
  }

  submitAddCategory() {
    const bodyRequest = {
      categoryGroupId: this.formGroupAddCategory.get('type').value.categoryGroupId,
      name: this.formGroupAddCategory.get('name').value.toString().toUpperCase()
    };
    this.expenseManagerService.addCategory(bodyRequest).subscribe({
      next: () => {
        this.router.navigate(['list-categories/all']);
      }, error: () => {

      }
    });
  }

  cancelAddCategory() {
    this.router.navigate(['list-category/all']);
  }
}
