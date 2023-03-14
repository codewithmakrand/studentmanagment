import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetstudentsService } from 'src/app/services/getstudents.service';
import { student } from 'src/model/student';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
students?:student[];

  constructor(private stu:GetstudentsService , private router:Router) { }

  ngOnInit(): void {
    this.getstudent();

  }

  private getstudent(){
    this.stu.getstudent().subscribe(data=>{
      this.students=data
      console.log(data)
      console.log('hello')
    })
  }

  updatestd(id:any){
    this.router.navigate(['update',id])
  }

  deletestd(id:any){
     this.stu.deletestd(id).subscribe(data=>{
      console.log(data);
      this.gotolist();
     }
      )
  }

  gotolist(){
    window.location.reload();
  }
}
