import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
adminu="";
adminp="";
error="";
  constructor(private router:Router, private auth:AuthentificationService) { }

  ngOnInit(): void {
  }
navg(){
this.router.navigate(['/userlog'])
}

login(){
  if(this.adminu.trim().length===0){
    this.error="User Name Required"
  }else if(this.adminp.trim().length===0){
    this.error="PassWord Required"
  }else{
    this.error="";
    let res =this.auth.adminlogin(this.adminu,this.adminp);
      if(res===200){
        this.router.navigate(['/list'])
      }
      if(res===403){
        this.error="Incorrect Details"
      }
  }
}
}
