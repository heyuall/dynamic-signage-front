import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Main22Component } from './main22.component';

describe('Main22Component', () => {
  let component: Main22Component;
  let fixture: ComponentFixture<Main22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Main22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Main22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
