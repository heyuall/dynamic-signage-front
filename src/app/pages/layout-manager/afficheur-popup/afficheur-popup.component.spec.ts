import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheurPopupComponent } from './afficheur-popup.component';

describe('AfficheurPopupComponent', () => {
  let component: AfficheurPopupComponent;
  let fixture: ComponentFixture<AfficheurPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficheurPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheurPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
