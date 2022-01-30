import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule) },
  { path: 'reservation-page', loadChildren: () => import('./pages/reservation-page/reservation-page.module').then(m => m.ReservationPageModule) },
  { path: '404', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
