import { Component,inject,OnInit } from '@angular/core';
import { User } from '../services/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  private user=inject(User);
    users:any[]=[]

  loading=false;
  error='';

  getUsers(){
       this.loading=true;
       this.error='';

    this.users.getUsers().subscribe({

      next(data:any){
        this.users=data.users;
        this.loading=false;
      }

      error:(err:any)=>{
       console.log(err);
        this.loading=false;
      }
    })



}

}