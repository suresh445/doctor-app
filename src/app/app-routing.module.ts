import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';
import { PatientviewComponent } from './patientview/patientview.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Admin',component:AdminComponent},
  {path:'Doctor',component:DoctorComponent},
  {path:'Patient',component:PatientComponent},
  {path:'About',component:AboutComponent},
  {path:'Patientview',component:PatientviewComponent},
  {path:'Register',component:RegisterComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
