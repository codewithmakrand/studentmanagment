import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  username='';
  password='';
  error='';

  constructor(private router:Router,private auth:AuthentificationService) { }

  ngOnInit(): void {
  }
  navg(){
    this.router.navigate(['/adminlog'])
  }

  login(){
    if(this.username.trim().length===0){
      this.error="User Name Required"
    }else if(this.password.trim().length===0){
      this.error="PassWord Required"
    }else
    {
      this.error="";
      let res =this.auth.login(this.username,this.password);
      if(res===200){
        this.router.navigate(['/log'])
      }
      if(res===403){
        this.error="Incorrect Details"
      }
    }
  }



}
