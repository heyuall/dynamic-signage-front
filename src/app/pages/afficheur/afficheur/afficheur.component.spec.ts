import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheurComponent } from './afficheur.component';

describe('AfficheurComponent', () => {
  let component: AfficheurComponent;
  let fixture: ComponentFixture<AfficheurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficheurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
