import { getCurrencySymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {
  public name="NANDINI R N";
  public successclass="test-success";
  public haserror = true;
  public isSpecial = true; 
  public message = {
     "test-success": !this.haserror,
     "test-danger": this.haserror,
     "test-special": this.isSpecial
  }
  constructor() { }

  ngOnInit(): void {
  }

}
