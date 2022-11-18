import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCategoriesContainerComponent } from './list-categories-container.component';

describe('ListCategoriesContainerComponent', () => {
  let component: ListCategoriesContainerComponent;
  let fixture: ComponentFixture<ListCategoriesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCategoriesContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCategoriesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
