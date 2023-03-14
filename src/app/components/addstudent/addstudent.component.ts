import { Component, OnInit } from '@angular/core';
import { student } from 'src/model/student';
import { GetstudentsService } from 'src/app/services/getstudents.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

students:student=new student()

  constructor(private stud :GetstudentsService, private route:Router) { }

  ngOnInit(): void {
  }

   savestudent(){
    this.stud.addstudent(this.students).subscribe(data=>{
      this.gotolist();
    },
    error => console.log(error))
   }

gotolist(){
  this.route.navigate(['/list'])
}

  onSubmits(){
    console.log(this.students)
    this.savestudent()
  }


}
