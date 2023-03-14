import { Component, OnInit } from '@angular/core';
import { GetstudentsService } from 'src/app/services/getstudents.service';
import { student } from 'src/model/student';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
students?:student[]
  constructor(private stu :GetstudentsService) { }

  ngOnInit(): void {
    this.getstudent()
  }

 /* private getstudent(){
    this.stu.getstudent().subscribe(data=>{
      this.students=data
      console.log(data)
      console.log('hello')
    })
  }*/

  getstudent(){
    this.stu.getstudent().subscribe(
      (st:student | any)=>
      {
        this.students=st;
        console.log(st);
      },
      (e)=>{console.log(e)}
    );
  }
}
