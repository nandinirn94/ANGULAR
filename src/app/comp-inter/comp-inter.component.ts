import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-comp-inter',
  template: `
  <h2>{{"hello " + parentData}}</h2>
  `,
  styleUrls: ['./comp-inter.component.css']
})

export class CompInterComponent implements OnInit {
  @Input() public parentData: any;
  
  constructor() { }

  ngOnInit(): void {
  }
}
