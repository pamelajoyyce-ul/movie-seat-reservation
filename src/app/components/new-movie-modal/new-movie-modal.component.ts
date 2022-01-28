import { Component, OnInit } from '@angular/core';
import { MatChip } from '@angular/material/chips';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
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
    timeSlots: [[], Validators.required],
    seats: [null, Validators.compose([Validators.required, Validators.min(18)])]
  })

  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal
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

  onSubmit(){
    console.log('Submit Clicked')
  }

}
