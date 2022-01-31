import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewMovieModalComponent } from 'src/app/components/new-movie-modal/new-movie-modal.component';
import { ServerService } from 'src/app/services/server/server.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  movies: any[] = [];
  constructor(
    private modalService: NgbModal,
    private server: ServerService
  ) { }

  ngOnInit(): void {
    this.getEvents();
  }

  openModal() {
    this.modalService.open(NewMovieModalComponent, {
      backdrop: 'static'
    });

  }

  private getEvents() {
    this.server.getMovies().then((response: any) => {
      console.log('Response', response);
      this.movies = response.map((ev: any) => {
        ev.body = ev.description;
        ev.header = ev.name;
        ev.icon = 'fa-clock-o';
        return ev;
      });
    });
  }

  // createEvent() {
  //   const newEvent = {
  //     owner: "Pamela",
  //     name: "Pamela",
  //     description: "test",
  //     date: new Date,
  //   };
  //   this.server.createEvent(newEvent).then(() => {
  //     this.getEvents();
  //   });
  // }

}
