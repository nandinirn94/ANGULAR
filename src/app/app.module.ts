import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { StyleBindComponent } from './style-bind/style-bind.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { TemRefVarComponent } from './tem-ref-var/tem-ref-var.component';
import { NgModelComponent } from './ng-model/ng-model.component';
import { FormsModule } from '@angular/forms';
import { NgIfComponent } from './ng-if/ng-if.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    StyleBindComponent,
    EventBindComponent,
    TemRefVarComponent,
    NgModelComponent,
    NgIfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
