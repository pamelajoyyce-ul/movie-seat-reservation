import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CancellationModalComponent } from 'src/app/components/cancellation-modal/cancellation-modal.component';
import { HistoryModalComponent } from 'src/app/components/history-modal/history-modal.component';

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.scss']
})
export class ReservationPageComponent implements OnInit {

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  openHistoryModal() {
     this.modalService.open(HistoryModalComponent)
  }

  openCancelModal(){
    this.modalService.open(CancellationModalComponent)
  }

}
