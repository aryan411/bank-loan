import { Routes } from '@angular/router';
import { LoanFormComponent } from './pages/loan-form/loan-form.component';
import { ApplicationListComponent } from './pages/application-list/application-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: LoanFormComponent,
  },
  {
    path: 'applicationList',
    component: ApplicationListComponent,
  },
];
