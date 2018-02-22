import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SpinnerService {

  public spinnerSubject: Subject<boolean>;
  constructor() {
    this.spinnerSubject = new Subject();
  }

  setSpinner() {
    return setTimeout(() => {
      this.show();
    }, 500);
  }

  resetSpinner(timer) {
    clearTimeout(timer);
    this.hide();
  }

  show() {
      this.spinnerSubject.next(true);
  }

  hide() {
      this.spinnerSubject.next(false);
  }
}
