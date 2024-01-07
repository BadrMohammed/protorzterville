import { CanActivateFn, Router } from '@angular/router';
import { SecurityService } from '../../services/security/security.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const securityService = inject(SecurityService);

  const isLoggedIn = securityService.isLoggedIn();
  if (isLoggedIn) {
    return true;
  }

  router.navigate(['login'], { queryParams: { returnURL: state.url } });
  return true;
};

export const authAccessGuard: CanActivateFn = (route, state) => {
  const securityService = inject(SecurityService);

  const isLoggedIn = securityService.isLoggedIn();
  if (isLoggedIn) {
    return false;
  }

  return true;
};
