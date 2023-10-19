import { Component } from '@angular/core';
import { IEmployee } from './iemployee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';


  public employee: IEmployee[];
  constructor() {
    this.employee =
      [
        { empName: 'phani', empSalary: 30000, empEmail: 'phani.gatta@gmail.com', empAge: 30 },
        { empName: 'phani', empSalary: 30000, empEmail: 'phani.gatta@gmail.com', empAge: 30 }
      ]
  }
}
