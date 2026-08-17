import { Routes } from '@angular/router';
import { Login } from './login/login';

export const routes: Routes = [
  { path: 'login', component: Login },

  {path:'Dashboard',
    loadComponent:()=>
    import('./dashbaord/dashbaord')
    .then(m=>m.Dashbaord)
  }
];
