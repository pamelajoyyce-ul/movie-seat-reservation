import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewMovieModalComponent } from 'src/app/components/new-movie-modal/new-movie-modal.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  openModal() {
    this.modalService.open(NewMovieModalComponent, {
      backdrop: 'static'
    });

  }

}
