import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EventService} from './services/event.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

  constructor(public eventService: EventService, private router: Router){}

  addEvent(){
    this.router.navigateByUrl('/events');

    //const name = this.
    //let event = {'name': this.}
  }

}
