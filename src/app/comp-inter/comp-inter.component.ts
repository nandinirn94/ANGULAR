import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-comp-inter',
  template: `
  <h2>{{"hello " + parentData}}</h2>
  <button (click)="fireEvent()">Send Event</button>
  `,
  styleUrls: ['./comp-inter.component.css']
})

export class CompInterComponent implements OnInit {
  @Input() public parentData: any;
  @Output() public childEvent = new EventEmitter();  
  
  constructor() { }

  ngOnInit(): void {
  }

  fireEvent()
  {
    this.childEvent.emit("hey everyone !!");
  }

}
