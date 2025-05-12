export const APP_ROUTES = [
  {
    path: '',
    loadComponent: () =>
      import('./login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'dashboard/admin',
    loadComponent: () =>
      import('./dashboard/admin.component').then(
        (m) => m.AdminDashboardComponent,
      ),
  },
  {
    path: 'dashboard/manager',
    loadComponent: () =>
      import('./dashboard/manager.component').then(
        (m) => m.ManagerDashboardComponent,
      ),
  },
  {
    path: 'dashboard/reader',
    loadComponent: () =>
      import('./dashboard/reader.component').then(
        (m) => m.ReaderDashboardComponent,
      ),
  },
  {
    path: 'dashboard/writer',
    loadComponent: () =>
      import('./dashboard/writer.component').then(
        (m) => m.WriterDashboardComponent,
      ),
  },
  {
    path: 'dashboard/reader-writer',
    loadComponent: () =>
      import('./dashboard/reader-writer.component').then(
        (m) => m.ReaderWriterDashboardComponent,
      ),
  },
  {
    path: 'dashboard/client',
    loadComponent: () =>
      import('./dashboard/client.component').then(
        (m) => m.ClientDashboardComponent,
      ),
  },
  {
    path: 'dashboard/default',
    loadComponent: () =>
      import('./dashboard/default.component').then(
        (m) => m.DefaultDashboardComponent,
      ),
  },
];
