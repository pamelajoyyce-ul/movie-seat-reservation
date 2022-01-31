import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.scss']
})
export class MoviePreviewComponent implements OnInit {
  @Input('data') data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
