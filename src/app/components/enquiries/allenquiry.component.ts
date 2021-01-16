import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-allenquiry',
    templateUrl: 'allenquiry.component.html',
    styleUrls: ['allenquiry.component.css']
})

export class AllEnquiriesComponent implements OnInit{ 
    displayedColumns: string[] = ['course', 'fullName', 'gender', 'message','mobileNumber'];
    public url = 'http://localhost:3000';
    public dataSource = {};
    constructor(private http: HttpClient){};
    ngOnInit() {
        this.http.get(this.url + '/enquiries').subscribe((resp: any) => {
            console.log(resp);
            this.dataSource = resp;
          }, (err) => {
          });
    }
 

}