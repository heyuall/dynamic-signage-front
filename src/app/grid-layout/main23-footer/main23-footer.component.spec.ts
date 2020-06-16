import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Main23FooterComponent } from './main23-footer.component';

describe('Main23FooterComponent', () => {
  let component: Main23FooterComponent;
  let fixture: ComponentFixture<Main23FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Main23FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Main23FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
