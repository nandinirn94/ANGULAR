import { Injectable } from '@angular/core';

@Injectable()
export class EmpService {

  constructor() { }

  getEmployees(){
    return [
      {"id" : 10001 , "name" : "Nandini" , "age" : 22},
      {"id" : 10002 , "name" : "Sherly" , "age" : 25},
      {"id" : 10003 , "name" : "Swathi" , "age" : 27},
      {"id" : 10004 , "name" : "Harshi" , "age" : 24},
      ];

  }
}
