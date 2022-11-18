import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCategoriesExpenseComponent } from './list-categories-expense.component';

describe('ListCategoriesExpenseComponent', () => {
  let component: ListCategoriesExpenseComponent;
  let fixture: ComponentFixture<ListCategoriesExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCategoriesExpenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCategoriesExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
