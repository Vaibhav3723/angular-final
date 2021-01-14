import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private snack:MatSnackBar) { }

  ngOnInit() {
  }
  btnClick()
  {
   
    this.snack.open("Please Register From","OK")
  }
}
