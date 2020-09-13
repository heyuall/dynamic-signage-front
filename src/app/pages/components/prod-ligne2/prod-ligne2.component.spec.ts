import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdLigne2Component } from './prod-ligne2.component';

describe('ProdLigne2Component', () => {
  let component: ProdLigne2Component;
  let fixture: ComponentFixture<ProdLigne2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdLigne2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdLigne2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
