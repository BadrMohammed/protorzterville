import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const newsGuard: CanActivateFn = (route, state) => {
  console.log(route, state);
  // const router = inject(Router);
  // console.log('1111111111', router);
  return true; // can access it if return true;
};
