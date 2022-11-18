import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCategoriesIncomeComponent } from './list-categories-income.component';

describe('ListCategoriesIncomeComponent', () => {
  let component: ListCategoriesIncomeComponent;
  let fixture: ComponentFixture<ListCategoriesIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCategoriesIncomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCategoriesIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
