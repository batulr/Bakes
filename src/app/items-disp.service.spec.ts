import { TestBed } from '@angular/core/testing';

import { ItemsDispService } from './items-disp.service';

describe('ItemsDispService', () => {
  let service: ItemsDispService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsDispService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
