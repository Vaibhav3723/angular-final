import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {CoursesComponent} from './components/courses/courses.component';

import { EnquiryComponent} from './components/enquiry/enquiry.component';
import {PlacementComponent} from './components/placement/placement.component';

import {FacultyComponent} from './components/faculty/faculty.component';
import {CampuslifeComponent} from './components/campuslife/campuslife.component';
import { FaqComponent } from './components/faq/faq.component';
import { AllEnquiriesComponent } from './components/enquiries/allenquiry.component';

const routes: Routes = [
  { path:'home', component:HomeComponent},
  { path: 'login',  component: LoginComponent},
  { path:'registration', component: RegistrationComponent},
  { path:'about', component: AboutComponent},
  { path:'courses', component: CoursesComponent},
  
  { path:'enquiry', component:EnquiryComponent},
  { path:'placement', component: PlacementComponent},
  
  { path:'faculty', component: FacultyComponent},
  {path:'campuslife', component: CampuslifeComponent},
  {path:'faq', component: FaqComponent},
  {path:'enquiries',component: AllEnquiriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
