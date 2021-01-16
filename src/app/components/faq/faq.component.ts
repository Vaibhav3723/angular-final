import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

CAT:boolean=true
visible:boolean=false


onClick()
{
  this.CAT = !this.CAT
  this.visible = !this.visible
}
  constructor() { }

  ngOnInit() {
  }

}
