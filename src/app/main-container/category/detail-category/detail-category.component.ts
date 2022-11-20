import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ExpenseManagerService} from "../../../expense-manager.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../../expense-manager";

@Component({
  selector: 'app-detail-category',
  templateUrl: './detail-category.component.html',
  styleUrls: ['./detail-category.component.scss']
})
export class DetailCategoryComponent implements OnInit {

  userId: number;
  categoryId: number;
  formGroupEditCategory!: FormGroup;
  listTransactionType: any[];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private expenseManagerService: ExpenseManagerService
  ) {
    this.initAttribute();
  }

  ngOnInit(): void {
    this.getDetailCategory();
  }

  initAttribute() {
    this.listTransactionType = [{categoryGroupId: 1, categoryGroupName: 'income'}, {categoryGroupId: 2, categoryGroupName: 'expense'}];

    this.formGroupEditCategory = this.formBuilder.group({
      type: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required])
    });
    this.categoryId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  getDetailCategory() {
    this.expenseManagerService.getDetailCategory(this.categoryId).subscribe({
      next: (result: any) => {
        this.formGroupEditCategory.get('type').setValue(result.category_group_id);
        this.formGroupEditCategory.get('name').setValue(result.category_name);
      }
    });
  }

  submitEditCategory() {
    const bodyRequest = {
      categoryGroupId: this.formGroupEditCategory.get('type').value.categoryGroupId,
      name: this.formGroupEditCategory.get('name').value.toString().toUpperCase()
    };
    this.expenseManagerService.editCategory(this.categoryId, bodyRequest).subscribe({
      next: () => {
        this.router.navigate(['list-categories/all']);
      }, error: () => {

      }
    });
  }

  deleteCategory() {
    this.expenseManagerService.deleteCategory(this.categoryId).subscribe({
      next: () => {
        this.router.navigate(['list-categories/all']);
      }, error: (error) => {
        console.log(error);
      }
    });
  }

  cancelEditCategory() {
    this.router.navigate(['list-categories/all']);
  }

}
