import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { AboutComponent } from './components/about/about.component';
import { CoursesComponent } from './components/courses/courses.component';

import { FacultyComponent } from './components/faculty/faculty.component';
import { CampuslifeComponent } from './components/campuslife/campuslife.component';
import { EnquiryComponent } from './components/enquiry/enquiry.component';
import { PlacementComponent } from './components/placement/placement.component';

import {MatInputModule} from '@angular/material/input';
import { FooterComponent } from './components/footer/footer.component';
import { FaqComponent } from './components/faq/faq.component';
import {MatSelectModule} from '@angular/material/select';
import { MatRadioModule, MatTableModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AllEnquiriesComponent } from './components/enquiries/allenquiry.component';
import { AdminViewComponent } from './components/adminview/adminview.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    AboutComponent,
    CoursesComponent,

    FacultyComponent,
    CampuslifeComponent,
    EnquiryComponent,
    PlacementComponent,
    AllEnquiriesComponent,
    AdminViewComponent,
  
    FooterComponent,
  
    FaqComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }
