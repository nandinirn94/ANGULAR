import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { StyleBindComponent } from './style-bind/style-bind.component';
import { EventBindComponent } from './event-bind/event-bind.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    StyleBindComponent,
    EventBindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
