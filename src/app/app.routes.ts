import { Routes } from '@angular/router';
import { LoanFormComponent } from './pages/loan-form/loan-form.component';
import { ApplicationListComponent } from './pages/application-list/application-list.component';
import { ChallengesComponent } from './pages/challenges/challenges.component';
import { C1Component } from './pages/challenges/c1/c1.component';
import { TodosComponent } from './pages/todos/todos.component';

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
  {
    path: 'challenges',
    component: ChallengesComponent,
  },
  {
    path: 'challenges/c1',
    loadComponent: () =>
      import('./pages/challenges/c1/c1.component').then((m) => m.C1Component),
  },
  {
    path: 'palindrome_checker',
    loadComponent: () =>
      import('./pages/palindrome-checker/palindrome-checker.component').then(
        (m) => m.PalindromeCheckerComponent
      ),
  },
  {
    path: 'todos',
    component: TodosComponent,
  },
];
