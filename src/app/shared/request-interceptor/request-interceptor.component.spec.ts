import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestInterceptorComponent } from './request-interceptor.component';

describe('RequestInterceptorComponent', () => {
  let component: RequestInterceptorComponent;
  let fixture: ComponentFixture<RequestInterceptorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestInterceptorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestInterceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
