import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpcrTemplatesComponent } from './ipcr-templates.component';

describe('IpcrTemplatesComponent', () => {
  let component: IpcrTemplatesComponent;
  let fixture: ComponentFixture<IpcrTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpcrTemplatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpcrTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
