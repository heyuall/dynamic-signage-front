import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdLigne1Component } from './prod-ligne1.component';

describe('ProdLigne1Component', () => {
  let component: ProdLigne1Component;
  let fixture: ComponentFixture<ProdLigne1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdLigne1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdLigne1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
