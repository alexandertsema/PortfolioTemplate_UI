import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { BASE_URL } from 'app/settings/endpoints';
import { SpinnerService } from 'app/services/spinner/spinner.service';
import { EmptyObservable } from 'rxjs/observable/EmptyObservable';

@Injectable()
export class HttpService {

  private timer: any;
  constructor(private http: HttpClient, private spinnerService: SpinnerService) { }

  public get<T>(url : string): Observable<T> {
    const timer = this.spinnerService.setSpinner();
    return this.http
      .get<T>(`${BASE_URL}/${url}.json`)
        .pipe(
          tap(_ => this.spinnerService.resetSpinner(timer)),
          catchError(this.handleError<T>(timer))
    );
  }

  private handleError<T>(timer: any) {
    return (error: any): Observable<T> => {
      console.log(error);
      this.spinnerService.resetSpinner(timer)
      return new EmptyObservable();
    };
  }
}
