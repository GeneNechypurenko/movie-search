import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'http://www.omdbapi.com/?apikey=7c28e0b1';

  constructor(private http: HttpClient) {}

  getMovieData(title: string): Observable<any> {
    return this.http.get(`${this.apiUrl}&t=${title}`);
  }
}
