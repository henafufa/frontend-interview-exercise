import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { PROFILE } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private API_URL = 'api/profile';
  constructor(private http: HttpClient) { }

  getProfile(): Observable<PROFILE[]> {
    return this.http.get<PROFILE[]>(this.API_URL).pipe(
      tap(_ => console.log('profile returned'))
    );
  }
}
