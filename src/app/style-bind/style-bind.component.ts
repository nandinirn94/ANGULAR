import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-bind',
  templateUrl: './style-bind.component.html',
  styleUrls: ['./style-bind.component.css']
})
export class StyleBindComponent implements OnInit {
  public name = "NANDU"; 
  public haserror = true;
  public highlight = false;
  public merge={
    color: 'purple',
    fontStyle: 'italic'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
