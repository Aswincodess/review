import { HttpInterceptorFn } from '@angular/common/http';

import { Dashbaord } from '../dashbaord/dashbaord';



export const authInterceptor: HttpInterceptorFn = (req, next) => {


  const token = localStorage.getItem('token');
  if(token){
      const reqauth=req.clone({
        setHeaders:{
          Authorization:`Bearer ${token}`
        }
      })
      return next(reqauth);

  }

  return next(req);
};
