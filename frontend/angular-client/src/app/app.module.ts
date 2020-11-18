import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventCardComponent } from './event-card/event-card.component';
import { HttpClientModule } from '@angular/common/http';
import { EventsComponent } from './events/events.component';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { EventFormComponent } from './event-form/event-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EventCardComponent,
    EventsComponent,
    AuthComponent,
    AdminComponent,
    EventFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
