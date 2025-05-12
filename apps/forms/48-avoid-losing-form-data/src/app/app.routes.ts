import { Route } from '@angular/router';
import { CanDeactivateGuard } from './candeactivate.guard';
import { PageComponent } from './pages/page.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'form',
  },
  {
    path: 'form',
    loadComponent: () =>
      import('./ui/form.component').then((m) => m.FormComponent),
    canDeactivate: [CanDeactivateGuard],
  },
  {
    path: 'page-1',
    data: {
      title: 'Page 1',
    },
    loadComponent: () => PageComponent,
  },
  {
    path: 'page-2',
    data: {
      title: 'Page 2',
    },
    loadComponent: () => PageComponent,
  },
];
