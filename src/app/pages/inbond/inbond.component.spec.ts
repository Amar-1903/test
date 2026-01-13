import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InbondComponent } from './inbond.component';

describe('InbondComponent', () => {
  let component: InbondComponent;
  let fixture: ComponentFixture<InbondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InbondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InbondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
