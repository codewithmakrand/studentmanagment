import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { AddstudentComponent } from './components/addstudent/addstudent.component';
import { UpdatestudentComponent } from './components/updatestudent/updatestudent.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';

const routes: Routes = [

  {
    path:'',
    redirectTo:'userlog',
    pathMatch:'full'
  },

  {path:'list',
component:ListComponent
  },
  {
    path:'log',
    component:LoginComponent

  },
  {
    path:'add-student',
    component:AddstudentComponent
  },
  {
    path:'update/:id',
    component:UpdatestudentComponent
  },
  {
    path:'userlog',
    component:LoginUserComponent
  },
  {
    path:'adminlog',
    component:LoginAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
