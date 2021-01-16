import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
//import { AngularFireDatabase } from '@angular/fire/database';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {
  public form: FormGroup;
  public id = 2;
  public success = false;
  public url = 'http://localhost:3000';
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.form = this.formBuilder.group({
      fullName: [''],
      mobileNumber: [''],
      message: [''],
      gender: [''],
      course: ['']
    })
  }

  ngOnInit() {

  }

  submitFn() {
    let data = {
      id: this.id
    };

    for (let key in this.form.controls) {
      data[key] = this.form.controls[key].value;
    };
    this.http.post(this.url + '/enquiries', data).subscribe((resp) => {
      this.id = this.id + 1;
      this.success = true;
    }, (err) => {
    });
  }

}
