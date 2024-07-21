import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPartnerComponent } from './crud-partner.component';

describe('CrudPartnerComponent', () => {
  let component: CrudPartnerComponent;
  let fixture: ComponentFixture<CrudPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudPartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
