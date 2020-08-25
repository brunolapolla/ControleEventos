import { Component, OnInit } from '@angular/core';
import { DetailsEventComponent } from 'src/app/details-event/details-event.component';
import {Observable} from "rxjs";
import {EventService} from "../event.service";
import {Event} from "../event";
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {

  event: Observable<Event[]>;

  constructor(private eventService: EventService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.event=this.eventService.getEventList();
  }

  deleteEvent(id : number){
    this.eventService.deleteEvent(id)
    .subscribe(
      data=>{
        console.log(data)
        this.reloadData();
      },
      error => console.log(error)
    );
  }

  eventDetails(id:number){
    this.router.navigate(['detalhes', id]);
  }

  updateEvent(id:number){
    this.router.navigate(['atualizar', id]);
  }

}
