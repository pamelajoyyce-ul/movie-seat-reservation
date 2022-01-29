import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MoviePreviewComponent } from './components/movie-preview/movie-preview.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { NewMovieModalComponent } from './components/new-movie-modal/new-movie-modal.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';import { ReactiveFormsModule } from '@angular/forms';
import { ReservationPageComponent } from './pages/reservation-page/reservation-page.component';
import {MatSelectModule} from '@angular/material/select';
import { SeatMapComponent } from './components/seat-map/seat-map.component';
import { HistoryModalComponent } from './components/history-modal/history-modal.component';
import { CancellationModalComponent } from './components/cancellation-modal/cancellation-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MoviePreviewComponent,
    NewMovieModalComponent,
    ReservationPageComponent,
    SeatMapComponent,
    HistoryModalComponent,
    CancellationModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NoopAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
