import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public data;
  public displayMessage = false;
  public url = 'http://localhost:3000';
  constructor(private snack: MatSnackBar, private formBuilder: FormBuilder, private http: HttpClient,
    private router: Router) {

    this.form = this.formBuilder.group({
      id: [''],
      password: [''],
    })
  }

  ngOnInit() {
  }

  btnClick() {
    this.displayMessage = false;
    this.data = {
      id: this.form.controls['id'].value,
      password: this.form.controls['password'].value,
    }
    this.snack.open("Please Login", "OK");
    this.http.get(this.url + '/login?id='+ this.data.id + '&password='+ this.data.password).subscribe((resp: any) => {
        this.displayMessage = true;
      if(resp[0].role == "Admin") {
        this.router.navigate(['adminView']);
        this.displayMessage = false;
     } else if(resp[0].role == "Faculty") {
       this.router.navigate(['enquiries']);
       this.displayMessage = false;
     } 
    }, (err) => {
      console.log(err);
    });
  }
  btnClickk() {
    this.snack.open("please register", "OK")
  }
}
