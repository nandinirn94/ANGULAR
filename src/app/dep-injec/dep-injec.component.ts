import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-dep-injec',
  template: `
  <h2>List of Employees</h2>
  <ul *ngFor="let emp of employee">
    <li>{{ emp.id + " " + emp.name + " " + emp.age }}
</ul>
  `,
  styleUrls: ['./dep-injec.component.css']
})
export class DepInjecComponent implements OnInit {
  public employee: { id: number; name: string; age: number; }[] = [];

  constructor(private _emp_service : EmpService ) { }
  
  ngOnInit() {
    this.employee = this._emp_service.getEmployees();
  }

}
