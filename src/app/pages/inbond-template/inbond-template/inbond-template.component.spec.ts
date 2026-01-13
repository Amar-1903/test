import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InbondTemplateComponent } from './inbond-template.component';

describe('InbondTemplateComponent', () => {
  let component: InbondTemplateComponent;
  let fixture: ComponentFixture<InbondTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InbondTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InbondTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
