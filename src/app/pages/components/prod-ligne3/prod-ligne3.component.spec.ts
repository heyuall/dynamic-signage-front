import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdLigne3Component } from './prod-ligne3.component';

describe('ProdLigne3Component', () => {
  let component: ProdLigne3Component;
  let fixture: ComponentFixture<ProdLigne3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdLigne3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdLigne3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
