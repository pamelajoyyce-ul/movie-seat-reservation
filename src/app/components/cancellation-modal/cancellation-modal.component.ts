import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cancellation-modal',
  templateUrl: './cancellation-modal.component.html',
  styleUrls: ['./cancellation-modal.component.scss']
})
export class CancellationModalComponent implements OnInit {

  cancellationForm = this.formBuilder.group({
    name: [null, Validators.required],
    seats: [null, Validators.required]
  })

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){}

}
