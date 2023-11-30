import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { tuGuardGuard } from './tu-guard.guard';

describe('tuGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => tuGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
