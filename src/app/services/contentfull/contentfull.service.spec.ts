import { TestBed } from '@angular/core/testing';

import { ContentfullService } from './contentfull.service';

describe('ContentfullService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContentfullService = TestBed.get(ContentfullService);
    expect(service).toBeTruthy();
  });
});
