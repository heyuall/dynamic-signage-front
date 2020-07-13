import { TestBed } from '@angular/core/testing';

import { InjiService } from './inji.service';

describe('InjiService', () => {
  let service: InjiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InjiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
