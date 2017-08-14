import { Component, NgModule } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: "./app.component.html"
})
export class AppComponent {
  public  title:   string = 'Marcus Bowcott';
  private baseUrl: string = "http://marcusbowcottapi.azurewebsites.net/";
  private apiUrl:  string = this.baseUrl + "api/artworksAPI";
  public  data:    any    = [{Name:"Loading ..."}];

  constructor(private http: Http) {
    console.log('AppComponent Constructor');
    this.getData();
  }
  getJSON(): any {
    console.log("Getting data ...");
    console.log(typeof this.http.get(this.apiUrl).map(res => res.json()));
    return this.http.get(this.apiUrl).map(res => res.json());
  }
  getData(): void {
    this.getJSON().subscribe(data => {
      console.log("__data__");
      console.log(data);
      this.data = data;
    })
  }
}
