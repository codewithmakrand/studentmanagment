import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { student } from 'src/model/student';

@Injectable({
  providedIn: 'root'
})
export class GetstudentsService {
  private baseurl="http://localhost:8080/api/v1/student";
  constructor(private http:HttpClient) { }
  getstudent():Observable<student[]>{
    return this.http.get<student[]>(`http://localhost:8080/api/v1/student`);

  }

  addstudent(students:student):Observable<object>{
    return this.http.post(`${this.baseurl}`,students);
  }

  getstudentbyid(id:any):Observable<student>{
    return this.http.get<student>(`${this.baseurl}/${id}`)
  }

  updatedstudent(id:any,students:student):Observable<object>{
    return this.http.put(`${this.baseurl}/${id}`,students)
  }
   deletestd(id:any):Observable<object>{
    return this.http.delete(`${this.baseurl}/${id}`)
   }
}
