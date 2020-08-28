import { TestBed } from '@angular/core/testing';

import { ComponentDataService } from './component-data.service';

describe('ComponentDataService', () => {
  let service: ComponentDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
