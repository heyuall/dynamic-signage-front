import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AperculayoutComponent } from './aperculayout.component';

describe('AperculayoutComponent', () => {
  let component: AperculayoutComponent;
  let fixture: ComponentFixture<AperculayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AperculayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AperculayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
