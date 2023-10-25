import { Component, OnInit } from '@angular/core';
import { IEmployee } from './iemployee';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Demo';
  public employee: IEmployee[] | undefined;
  editEmployee: any = {}
  addEmployee: any = {}
  isUpdate: boolean = false;
  empFrom!: FormGroup;
  constructor(private fb: FormBuilder) {

  }
  ngOnInit(): void {

    // this.empFrom = this.fb.group({
    //   empName: [''],
    //   empSalary: [''],
    //   empEmail: [''],
    //   empAge: []
    // })
    this.getEmpList()
  }
  getEmpList() {
    return this.employee =
      [
        { empId: 1, empName: 'phani', empSalary: 30000, empEmail: 'phani.gatta@gmail.com', empAge: 30 },
        { empId: 2, empName: 'phaneendra', empSalary: 30000, empEmail: 'phaneendra.gatta@gmail.com', empAge: 30 }
      ]
  }
  add(a: any) {
    this.addEmployee =
    {
      empName: a.empName,
      empSalary: a.empSalary,
      empEmail: a.empEmail,
      empAge: a.empAge,
    }

  }
  edit(e: any) {
    this.editEmployee =

    {
      empId: e.empId,
      empName: e.empName,
      empSalary: e.empSalary,
      empEmail: e.empEmail,
      empAge: e.empAge,
    }
    this.isUpdate = true
    // this.editEmployee.push(empObj)
    console.log(this.editEmployee)
  }
  update(u: any, id:any) {
    let empArr: any = []
    empArr.push(this.editEmployee)
    empArr.filter((e: any) => {
      e.empId === id
      this.employee?.push(u)
      
     } )
    
      
    
   
  }
  delete(i: any) {
    this.employee?.splice(i, 1)
  }
}
