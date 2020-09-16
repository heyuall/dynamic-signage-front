import { TestBed } from '@angular/core/testing';

import { ComponentInstanceService } from './component-instance.service';

describe('ComponentInstanceService', () => {
  let service: ComponentInstanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentInstanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
