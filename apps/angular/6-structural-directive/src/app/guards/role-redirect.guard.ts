import { inject } from '@angular/core';
import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const roleRedirectGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[],
) => {
  const authService = inject(AuthService); // Injeta a instância
  const router = inject(Router);

  const roles = authService.getUserRoles(); // Usa a instância

  if (roles.includes('Admin')) {
    router.navigate(['/dashboard/admin']);
  } else if (roles.includes('Manager')) {
    router.navigate(['/dashboard/manager']);
  } else if (roles.includes('Reader') && roles.includes('Writer')) {
    router.navigate(['/dashboard/reader-writer']);
  } else if (roles.includes('Reader')) {
    router.navigate(['/dashboard/reader']);
  } else if (roles.includes('Writer')) {
    router.navigate(['/dashboard/writer']);
  } else if (roles.includes('Client')) {
    router.navigate(['/dashboard/client']);
  } else {
    router.navigate(['/dashboard/default']);
  }

  return false;
};
