import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-bootcamp-form',
  templateUrl: './bootcamp-form.component.html',
  styleUrls: ['./bootcamp-form.component.css']
})
export class BootcampFormComponent implements OnInit {

  constructor() { }
  usermodel = new User('Nandini','R N','nandini@gmail.com',9739293412,22,'#11, 5th main road, hebbal');
  ngOnInit(): void {
  }
}


