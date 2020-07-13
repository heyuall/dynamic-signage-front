import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutchecklistComponent } from './layoutchecklist.component';

describe('LayoutchecklistComponent', () => {
  let component: LayoutchecklistComponent;
  let fixture: ComponentFixture<LayoutchecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutchecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutchecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
