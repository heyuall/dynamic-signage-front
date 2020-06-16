import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Main33Component } from './main33.component';

describe('Main33Component', () => {
  let component: Main33Component;
  let fixture: ComponentFixture<Main33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Main33Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Main33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
