import { Component } from '@angular/core';
import {User} from '../services/user';

@Component({
  selector: 'app-dashbaord',
  imports: [],
  templateUrl: './dashbaord.html',
  styleUrl: './dashbaord.css',
})
export class Dashbaord {

  setToken(token:string){
    localStorage.setItem('token',token);
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
