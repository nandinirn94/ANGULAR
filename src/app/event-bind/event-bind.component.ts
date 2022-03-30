import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-bind',
  template: `
  <h2>
            Greeting Phase
        </h2>
        <br>Prints on Console. <br>   <button (click)="console_writer()">Greet her</button>
        <br>
        <br>Prints on prompt.    <br> <button (click)="alert_box()">Greet him</button>
        <br>
        <br>Prints which type of event. <br><button (click)="onClick($event)"> Click here</button>
  `,
  styleUrls: ['./event-bind.component.css']
})
export class EventBindComponent implements OnInit {
  public greet="Hello, How are you doing? ";
  constructor() { }

  ngOnInit(): void {
  }
  alert_box()
  {
    alert("Hi, how u doing?");
  }
  console_writer(){
    console.log(this.greet);
  }

  onClick(event: Event)
  {
    alert("Event type is:: " + event);
  }

}
