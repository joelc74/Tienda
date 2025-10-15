import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyEmployeePage } from './my-employee.page';

describe('MyEmployeePage', () => {
  let component: MyEmployeePage;
  let fixture: ComponentFixture<MyEmployeePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEmployeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



