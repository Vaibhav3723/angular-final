import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {CoursesComponent} from './components/courses/courses.component';
import { ContactComponent } from './components/contact/contact.component';
import { EnquiryComponent} from './components/enquiry/enquiry.component';
import {PlacementComponent} from './components/placement/placement.component';
import {SignupComponent} from './components/signup/signup.component';
import {FacultyComponent} from './components/faculty/faculty.component';
import {CampuslifeComponent} from './components/campuslife/campuslife.component';

const routes: Routes = [
  { path:'home', component:HomeComponent},
  { path: 'login',  component: LoginComponent},
  { path:'registration', component: RegistrationComponent},
  { path:'about', component: AboutComponent},
  { path:'courses', component: CoursesComponent},
  { path:'contact', component: ContactComponent},
  { path:'enquiry', component:EnquiryComponent},
  { path:'placement', component: PlacementComponent},
  { path:'signup', component: SignupComponent},
  { path:'faculty', component: FacultyComponent},
  {path:'campuslife', component: CampuslifeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
