import { Component, OnInit } from '@angular/core';
import {EventService} from '../event.service';
import {Event} from '../event';
import {Router} from '@angular/router';


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  event: Event = new Event();

  submitted = false;

  constructor(private eventService: EventService, private router: Router) {

   }

  ngOnInit() {
  }

  newEvent(): void{
    this.submitted = false;
    this.event = new Event();
  }

  save() {
    this.eventService.createEvent(this.event)
    .subscribe(data=>console.log(data),
    error => console.log(error));
    this.event = new Event ();
    this.gotoList();
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  gotoList(){
    this.router.navigate(['/eventos'])
  }
}
