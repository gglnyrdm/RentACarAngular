import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';

export const securedRouteGuard: CanActivateFn = (route, state) => {

  const redirectNoAuthorized = () => {
    const router = inject(Router);
    router.navigate(['/not-found']);
    return false;
  }

  if(!localStorage.getItem('token')) return redirectNoAuthorized();

  if(!localStorage.getItem('user_roles')) return redirectNoAuthorized();

  const userRoles = JSON.parse(localStorage.getItem('user_roles'))
  const requiredUserRole = route.data['requiredUserRole'];
  if(!userRoles.includes(requiredUserRole)) return redirectNoAuthorized();

  return true;
};