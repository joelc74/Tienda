import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddSuplierFormPage } from './add-suplier-form.page';

describe('AddSuplierFormPage', () => {
  let component: AddSuplierFormPage;
  let fixture: ComponentFixture<AddSuplierFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSuplierFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



