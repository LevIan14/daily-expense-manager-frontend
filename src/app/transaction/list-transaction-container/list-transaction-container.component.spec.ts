import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTransactionContainerComponent } from './list-transaction-container.component';

describe('ListTransactionContainerComponent', () => {
  let component: ListTransactionContainerComponent;
  let fixture: ComponentFixture<ListTransactionContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTransactionContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTransactionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
