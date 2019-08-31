import { TestBed } from '@angular/core/testing';

import { MediatorDataService } from './mediator-data.service';

describe('MediatorDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MediatorDataService = TestBed.get(MediatorDataService);
    expect(service).toBeTruthy();
  });
});
