import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'app/services/spinner/spinner.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  animations: [
    trigger('spinnerState', [
      state('true', style({
        transform: 'none',
        display: 'block'
      })),
      state('false', style({
        transform: 'translateY(-3rem)',
        display: 'none'
      })),
      transition('false => true', animate('.2s cubic-bezier(0, 0, .2, 1)')),
      transition('true => false', animate('.8s cubic-bezier(.4, 0, 1, 1)'))
    ])]
})
export class SpinnerComponent implements OnInit {
  public isSpinning: boolean;
  constructor(private spinnerService: SpinnerService) { }

  ngOnInit() {
    this.spinnerService.spinnerSubject
      .subscribe(spinningState =>
          this.isSpinning = spinningState
      );
  }
}
