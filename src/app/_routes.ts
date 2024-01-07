import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { authAccessGuard, authGuard } from './shared/guards/auth/auth.guard';
import { StatusComponent } from './shared/components/status/status.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },

  {
    path: 'news',
    // canActivate: [],
    //lazy loading use load children
    loadChildren: () => import('./news/news.module').then((m) => m.NewsModule),
  },

  {
    path: 'courses',
    //lazy loading use load children
    canActivate: [authGuard],
    loadChildren: () =>
      import('./courses/courses.module').then((m) => m.CoursesModule),
  },

  {
    path: 'virtual-program',
    //lazy loading use load children
    canActivate: [authGuard],
    loadChildren: () =>
      import('./departments/departments.module').then(
        (m) => m.DepartmentsModule
      ),
  },

  {
    path: '',
    canActivate: [authAccessGuard],
    //lazy loading use load children
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },

  {
    path: 'error',
    component: StatusComponent,
  },

  //wildcard or error page  always to be the last index in routes

  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: PageNotFoundComponent,
  },
];
