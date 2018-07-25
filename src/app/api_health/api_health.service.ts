import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ApiHealth } from './api_health';

@Injectable()
export class ApiHealthService {
  data: ApiHealth;

  constructor(
    private http: HttpClient
  ) { }

  private healthUrl = environment.apiHost + '/health'

  getApiHealth(): Observable<ApiHealth> {
    this.data = this.http.get<ApiHealth>(this.healthUrl)
    console.log(this.data)
    return this.data
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T)
    }
  }
}
