import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class Auth {

    private isLoggedInSubject = new BehaviorSubject<boolean>(false);
    
    private http=inject(HttpClient);

    public isLoggedIn$ = this.isLoggedInSubject.asObservable();

    if(token){
        this.isLoggedInSubject.next(true);
    }

}
