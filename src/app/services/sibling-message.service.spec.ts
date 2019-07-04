import { TestBed } from '@angular/core/testing';

import { SiblingMessageService } from './sibling-message.service';

describe('SiblingMessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SiblingMessageService = TestBed.get(SiblingMessageService);
    expect(service).toBeTruthy();
  });
});
