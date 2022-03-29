import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-bind',
  templateUrl: './event-bind.component.html',
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
