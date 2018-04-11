import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QustFormComponent } from './qust-form.component';

describe('QustFormComponent', () => {
  let component: QustFormComponent;
  let fixture: ComponentFixture<QustFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QustFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QustFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
