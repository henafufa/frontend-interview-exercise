import { TestBed } from '@angular/core/testing';

import { Profile.TsService } from './profile.ts.service';

describe('Profile.TsService', () => {
  let service: Profile.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Profile.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
