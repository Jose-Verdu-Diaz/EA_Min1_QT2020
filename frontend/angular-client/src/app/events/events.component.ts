import { Component, OnInit } from '@angular/core';
import { Event } from '../model/event';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events?: Event[];

  constructor(public eventsService: EventService){
  }
  
  ngOnInit(){
    this.eventsService.loadEvents().subscribe (events => {
      this.events = events;
    })
  }

}
