import { CanActivateFn } from '@angular/router';
import {Dashbaord} from '../dashbaord/dashbaord';
import {Auth} from  '../services/auth';
import  {Router} from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const token=localStorage.getItem('token');

  if(!token){
    // return this.router.navigate(['/login']);
    return router.createUrlTree(['/Dashboard']);
  
}

  return true;
};
