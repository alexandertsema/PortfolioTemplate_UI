import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { BASE_URL } from 'app/settings/endpoints';
import { SpinnerService } from 'app/services/spinner/spinner.service';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient, private spinnerService: SpinnerService) { }

  public get<T>(url : string): Observable<T> {
    const timer = this.spinnerService.setSpinner()
    return this.http
      .get<T>(`${BASE_URL}/${url}.json`)
        .pipe(
          tap(_ => this.spinnerService.resetSpinner(timer)),
          catchError(this.handleError<T>()
        )
    );
  }

  private handleError<T>() {
    return (error: any): Observable<T> => {
      console.log(error);
      return Observable.empty()
    };
  }
}
