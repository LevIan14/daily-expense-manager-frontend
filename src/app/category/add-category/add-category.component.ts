import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ExpenseManagerService} from "../../expense-manager.service";

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  formGroupAddCategory!: FormGroup;
  listTransactionType: string[];

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
    this.formGroupAddCategory = this.formBuilder.group({
      type: new FormControl('Income'),
      name: new FormControl('', [Validators.required])
    });

    this.listTransactionType = ['Income', 'Expense'];
  }

  submitAddCategory() {
    this.formGroupAddCategory.get('type').setValue(this.formGroupAddCategory.get('type').value.toString().toLowerCase());
    this.expenseManagerService.addCategory(this.formGroupAddCategory.value).subscribe({
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
