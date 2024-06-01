import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgUnitsComponent } from './org-units.component';

describe('OrgUnitsComponent', () => {
  let component: OrgUnitsComponent;
  let fixture: ComponentFixture<OrgUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgUnitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
