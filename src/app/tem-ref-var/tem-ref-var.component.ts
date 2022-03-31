import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tem-ref-var',
  template: `
  <h2>Welcome {{name}} </h2>
  <input #myInput type="text">
  <button (click)="logmess(myInput.value)">LOG</button>
  `,
  styleUrls: ['./tem-ref-var.component.css']
})
export class TemRefVarComponent implements OnInit {
  public name="NANDU";

  constructor() { }

  ngOnInit(): void {
  }
   
  logmess(value: any)
  {
    console.log(value);
  }
}
