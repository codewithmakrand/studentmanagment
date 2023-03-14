import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetstudentsService } from 'src/app/services/getstudents.service';
import { student } from 'src/model/student';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit {
students:student=new student();
  constructor(private mys :GetstudentsService , private route:ActivatedRoute,private router:Router) { }
id?:number;

  ngOnInit(): void {
   this.id=this.route.snapshot.params['id']
    this.mys.getstudentbyid(this.id).subscribe(data=>{
     this.students=data;
    } ,error => console.log(error))
  }

  onsubmit(){
    this.mys.updatedstudent(this.id,this.students).subscribe(data=>{
   this.gotolist()
    },error=>console.log(error))
  }
  gotolist(){
    this.router.navigate(['/list'])
  }

}
