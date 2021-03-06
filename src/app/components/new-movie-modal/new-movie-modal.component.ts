import { Component, OnInit } from '@angular/core';
import { MatChip } from '@angular/material/chips';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ServerService } from 'src/app/services/server/server.service';
@Component({
  selector: 'app-new-movie-modal',
  templateUrl: './new-movie-modal.component.html',
  styleUrls: ['./new-movie-modal.component.scss']
})
export class NewMovieModalComponent implements OnInit {
  timeSlots = [
    {
      time: "6:00AM-8:00AM",
      value: '6'
    },
    {
      time: "8:00AM-10:00AM",
      value: '8'
    },
    {
      time: "10:00AM-12:00PM",
      value: '10'
    },
    {
      time: "12:00PM-2:00PM",
      value: '12'
    },
    {
      time: "2:00PM-4:00PM",
      value: '14'
    },
    {
      time: "4:00PM-6:00PM",
      value: '16'
    },
    {
      time: "6:00PM-8:00PM",
      value: '18'
    },
    {
      time: "8:00PM-10:00PM",
      value: '20'
    }
  ];

  addMovieForm = this.formBuilder.group({
    title: [null, Validators.required],
    poster: [null, Validators.required],
    time_slots: [],
    total_seats: [null, Validators.compose([Validators.required, Validators.min(18)])]
  })

  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private movieService: ServerService,
  ) { }

  ngOnInit(): void {
  }

  toggleSelection(chip: MatChip) {
    console.log('chip selected?', chip)
    chip.toggleSelected();
  }

  changeSelected() {
    console.log('event');
  }

  async onSubmit() {
    try {
      const movie = {
        title: this.addMovieForm.controls['title'].value,
        // poster: null,
        // time_slots: null,
        total_seats: this.addMovieForm.controls['total_seats'].value
      };
      console.log('details', movie)
      const test = 'test';
      const res: any = await this.movieService.createMovies(movie);
      this.activeModal.close('Close click');
      window.location.reload();
    } catch (err) {
      console.log('Failed to post', err);
    }
  }

}
