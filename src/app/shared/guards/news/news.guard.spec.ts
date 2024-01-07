import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { newsGuard } from './news.guard';

describe('newsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => newsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
