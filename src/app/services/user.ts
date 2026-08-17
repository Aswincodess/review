import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class User {

 private http=inject(HttpClient);

 getUsers(){
     this.http.get<any>('https://dummyjson.com/users')
 }

    
}
    