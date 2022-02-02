import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/services/server/server.service';

@Component({
  selector: 'app-seat-map',
  templateUrl: './seat-map.component.html',
  styleUrls: ['./seat-map.component.scss']
})
export class SeatMapComponent implements OnInit {
  seatSlots = [
    {
      id: 1,
      seat_no: 1,
      status: 'available',
      selected: false
    },
    {
      id: 2,
      seat_no: 2,
      status: 'available',
      selected: false
    },
    {
      id: 3,
      seat_no: 3,
      status: 'available',
      selected: false
    },
    {
      id: 4,
      seat_no: 4,
      status: 'unavailable',
      selected: false
    },
    {
      id: 5,
      seat_no: 5,
      status: 'available',
      selected: false
    },
    {
      id: 6,
      seat_no: 6,
      status: 'unavailable',
      selected: false
    },
    {
      id: 7,
      seat_no: 7,
      status: 'available',
      selected: false
    }, {
      id: 7,
      seat_no: 7,
      status: 'available',
      selected: false
    },
  ]

  constructor(private movieService: ServerService) { }

  ngOnInit(): void {
  }

  counter(i: number) {
    return new Array(i);
  }

}
