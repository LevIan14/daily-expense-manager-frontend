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
  listTransactionType: string[];

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
    this.formGroupEditCategory = this.formBuilder.group({
      type: new FormControl('income'),
      name: new FormControl('', [Validators.required])
    });
    this.listTransactionType = ['income', 'expense'];
    this.categoryId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  getDetailCategory() {
    this.userId = (JSON.parse(sessionStorage.getItem('user')) as User).id;
    this.expenseManagerService.getDetailCategory(this.categoryId, this.userId).subscribe({
      next: (result) => {
        console.log(result)
      }
    });
  }

  submitEditCategory() {
    const bodyRequest = {
      categoryId: this.categoryId,
      categoryGroup: this.formGroupEditCategory.get('type').value.toString().toUpperCase(),
      userId: JSON.parse(sessionStorage.getItem('user')).id,
      categoryName: this.formGroupEditCategory.get('name').value.toString()
    }
    this.expenseManagerService.editCategory(bodyRequest).subscribe({
      next: () => {
        this.router.navigate(['list-categories/all']);
      }, error: () => {

      }
    });
  }

  cancelEditCategory() {
    this.router.navigate(['list-categories/all']);
  }

}
