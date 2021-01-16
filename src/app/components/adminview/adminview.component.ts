import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
    selector: 'app-adminview',
    templateUrl: 'adminview.component.html',
    styleUrls: ['adminview.component.css']
})
export class AdminViewComponent {
    public url = 'http://localhost:3000';
    public showfaculty = false;
    public form;
    public data;
    public addFacultyFeature = false;
    displayedColumns: string[] = ['age', 'name'];
    public dataSource = {};
    constructor(private http: HttpClient,private formBuilder: FormBuilder) {
        this.form = this.formBuilder.group({
            age: [''],
            name: [''],
            id: ['']
          })
    }

    viewFaculty() {
        this.http.get(this.url + '/faculty').subscribe((resp: any) => {
            console.log(resp);
            this.showfaculty = true;
            this.dataSource = resp;
          }, (err) => {
          });
    }

    addFaculty() {
        this.addFacultyFeature = true;
        this.form.reset();
    }

    addFacultyMember() {
        this.data = {
            age: this.form.controls['age'].value,
            name: this.form.controls['name'].value,
            id: 1
          }
        this.http.get(this.url + '/faculty').subscribe((resp: any) => {
            this.data.id = resp.length + 1; 
            this.http.post(this.url + '/faculty',this.data).subscribe((resp: any) => {
                console.log(resp);
                this.addFacultyFeature = false;
                this.viewFaculty();
              }, (err) => {
              });
          }, (err) => {
          });
        
       
    }
}