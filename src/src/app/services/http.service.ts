import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  public get<T>(url : string) : Observable<T> {
    let resultObservable = this.http.get(url).catch(this.handleError);
    return resultObservable.map(res => <T> res.json());
  }

  private handleError (error: Response | any) {
      let errMsg: string;
      if (error instanceof Response) {
        const body = error.json() || '';
        errMsg = `${error.status} - ${error.statusText || ''}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      console.error(errMsg);
      return Observable.throw(errMsg);
    }
}
