import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  template:`
  <input [(ngModel)]="name" type="text">
  {{name}}
  
   
  
  `,
  styleUrls: ['./ng-model.component.css']
})
export class NgModelComponent implements OnInit {
  public name="";

  constructor() { }

  ngOnInit(): void {
  }

}
