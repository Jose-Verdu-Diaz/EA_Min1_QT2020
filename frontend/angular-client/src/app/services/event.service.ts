import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from '../model/event';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  loadEvents(){
    return this.http.get<Event[]>(environment.apiURL);
  }

  public addEvent(event: Event){
    return this.http.post(environment.apiURL + '/event/new', event)
  }
}
