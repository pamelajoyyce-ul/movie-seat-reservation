import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }

  private async request(method: string, url: string, data?: any) {
    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body'
      // }
    });
    return new Promise((resolve, reject) => {
      result.subscribe(resolve, reject);
    });
  }

  getMovies() {
    return this.request('GET', `${environment.serverUrl}/movies`);
  }

  createMovies(movies: any) {
    return this.request('POST', `${environment.serverUrl}/movies`, movies);
  }

  updateMovies(movies: any) {
    return this.request('PUT', `${environment.serverUrl}/movies/${movies.move_id}`, movies);
  }

}
