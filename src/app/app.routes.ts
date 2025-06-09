import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.page').then( m => m.DashboardPage)
  },
  {
    path: 'tasks',
    loadComponent: () => import('./pages/tasks/tasks.page').then( m => m.TasksPage)
  },
  {
    path: 'exams',
    loadComponent: () => import('./pages/exams/exams.page').then( m => m.ExamsPage)
  },
  {
    path: 'settings',
    loadComponent: () => import('./pages/settings/settings.page').then( m => m.SettingsPage)
  },
  {
    path: 'add-task',
    loadComponent: () => import('./pages/add-task/add-task.page').then( m => m.AddTaskPage)
  },
  {
    path: 'add-exam',
    loadComponent: () => import('./pages/add-exam/add-exam.page').then( m => m.AddExamPage)
  },
];
