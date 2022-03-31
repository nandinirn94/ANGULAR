import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  template: `
 <!--  <h2 *ngIf="displayname; else elseBlock">
    CodeEvolution
  </h2>

  <ng-template  #elseBlock>
  <h2> 
    Name is hidden...
  </h2>
  </ng-template>
-->

<div *ngIf="displayname; then thenblock; else elseblock"></div>
  <ng-template #thenblock>
    <h2> CodeEvolution </h2>
  </ng-template>

  <ng-template #elseblock>
  <h2> 
    Name is hidden...
  </h2>
  </ng-template>
  `,

  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  displayname = false;
  constructor() { }

  ngOnInit(): void {
  }

}
