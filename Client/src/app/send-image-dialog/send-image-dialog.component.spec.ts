import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SendImageDialogComponent} from './send-image-dialog.component';

describe('SendImageDialogComponent', () => {
  let component: SendImageDialogComponent;
  let fixture: ComponentFixture<SendImageDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SendImageDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendImageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
