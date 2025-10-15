import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddProductFormPage } from './add-product-form.page';

describe('AddProductFormPage', () => {
  let component: AddProductFormPage;
  let fixture: ComponentFixture<AddProductFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
