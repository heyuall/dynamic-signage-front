import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Main22AsideFooterComponent } from './main22-aside-footer.component';

describe('Main22AsideFooterComponent', () => {
  let component: Main22AsideFooterComponent;
  let fixture: ComponentFixture<Main22AsideFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Main22AsideFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Main22AsideFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
