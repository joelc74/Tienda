import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddStoreFormPage } from './add-store-form.page';

describe('AddStoreFormPage', () => {
  let component: AddStoreFormPage;
  let fixture: ComponentFixture<AddStoreFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStoreFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
