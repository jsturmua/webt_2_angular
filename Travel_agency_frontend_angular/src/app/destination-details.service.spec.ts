import { TestBed } from '@angular/core/testing';

import { DestinationDetailsService } from './destination-details.service';

describe('DestinationDetailsService', () => {
  let service: DestinationDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestinationDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
