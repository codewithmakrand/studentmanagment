import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor() { }
login(user:string,pwd:string){
  if(user==="user@gmail.com" && pwd==="user123"){
    return 200;
  }else{
    return 403;
  }
}


adminlogin(user:string,pwd:string){
  if(user==="admin@gmail.com" && pwd==="admin123"){
    return 200;
  }else{
    return 403;
  }
}

}
