import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Main23AsideFooterComponent } from './main23-aside-footer.component';

describe('Main23AsideFooterComponent', () => {
  let component: Main23AsideFooterComponent;
  let fixture: ComponentFixture<Main23AsideFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Main23AsideFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Main23AsideFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
