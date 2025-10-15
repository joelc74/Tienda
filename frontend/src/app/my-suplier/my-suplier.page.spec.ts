import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MySuplierPage } from './my-suplier.page';

describe('MySuplierPage', () => {
  let component: MySuplierPage;
  let fixture: ComponentFixture<MySuplierPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MySuplierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


