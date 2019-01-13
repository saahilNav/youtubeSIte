import { TestBed } from '@angular/core/testing';

import { YouTubeCommonServiceService } from './you-tube-common-service.service';

describe('YouTubeCommonServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YouTubeCommonServiceService = TestBed.get(YouTubeCommonServiceService);
    expect(service).toBeTruthy();
  });
});
