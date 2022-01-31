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
    private movieService: ServerService
  ) {
    this.getMovies();
  }

  ngOnInit(): void {
  }

  openModal() {
    this.modalService.open(NewMovieModalComponent, {
      backdrop: 'static'
    });

  }

  async getMovies() {
    try {
      const res: any = await this.movieService.getMovies();
      this.movies = res;
      console.log('res', res)
    } catch (err) {
      console.log('Error', err);
    }
  }

  addItem(newItem: any) {
    // this.movies.push(newItem);
    console.log('new Item', newItem);
    this.getMovies();
  }

}
