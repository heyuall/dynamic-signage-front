import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Main22FooterComponent } from './main22-footer.component';

describe('Main22FooterComponent', () => {
  let component: Main22FooterComponent;
  let fixture: ComponentFixture<Main22FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Main22FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Main22FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
