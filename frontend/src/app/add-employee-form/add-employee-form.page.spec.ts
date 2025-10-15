import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEmployeeFormPage } from './add-employee-form.page';

describe('AddEmployeeFormPage', () => {
  let component: AddEmployeeFormPage;
  let fixture: ComponentFixture<AddEmployeeFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
