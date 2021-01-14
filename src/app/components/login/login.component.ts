import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private snack:MatSnackBar) { }

  ngOnInit() {
  }
  
btnClick()
{
 
  this.snack.open("Please Login","OK")
}
}
