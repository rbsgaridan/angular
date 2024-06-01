import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcrTemplatesComponent } from './opcr-templates.component';

describe('OpcrTemplatesComponent', () => {
  let component: OpcrTemplatesComponent;
  let fixture: ComponentFixture<OpcrTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpcrTemplatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpcrTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
