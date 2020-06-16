import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Main23Component } from './main23.component';

describe('Main23Component', () => {
  let component: Main23Component;
  let fixture: ComponentFixture<Main23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Main23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Main23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
