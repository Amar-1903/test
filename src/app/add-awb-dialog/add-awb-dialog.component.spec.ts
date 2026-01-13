import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAwbDialogComponent } from './add-awb-dialog.component';

describe('AddAwbDialogComponent', () => {
  let component: AddAwbDialogComponent;
  let fixture: ComponentFixture<AddAwbDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAwbDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAwbDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
