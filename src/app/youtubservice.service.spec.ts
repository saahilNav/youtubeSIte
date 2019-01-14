import { TestBed } from '@angular/core/testing';

import { YoutubserviceService } from './youtubservice.service';

describe('YoutubserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YoutubserviceService = TestBed.get(YoutubserviceService);
    expect(service).toBeTruthy();
  });
});
