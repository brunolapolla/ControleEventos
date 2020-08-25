import { Component, OnInit } from '@angular/core';
import {Event} from '../event';
import {EventService} from '../event.service';
import {ListEventComponent} from '../list-event/list-event.component';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {

  id: number;
  event: Event;
  submitted = false;


  constructor(private route: ActivatedRoute,private router: Router,
    private eventService: EventService) { }

  ngOnInit() {
    this.event = new Event();

    this.id = this.route.snapshot.params['id'];
    
    this.eventService.getEvent(this.id)
      .subscribe(data => {
        console.log(data)
        this.event = data;
      }, error => console.log(error));
  }

  updateEvent() {
    this.eventService.updateEvent(this.id, this.event)
      .subscribe(data => console.log(data), error => console.log(error));
    this.event = new Event();
    this.gotoList();
  }

  onSubmit() {
    this.updateEvent();    
  }

  gotoList() {
    this.router.navigate(['/eventos']);
  }

}
