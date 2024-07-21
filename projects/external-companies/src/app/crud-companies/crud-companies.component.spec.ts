import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCompaniesComponent } from './crud-companies.component';

describe('CrudCompaniesComponent', () => {
  let component: CrudCompaniesComponent;
  let fixture: ComponentFixture<CrudCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudCompaniesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
