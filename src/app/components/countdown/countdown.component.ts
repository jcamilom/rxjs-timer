import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { calculateRemainingTime } from '../../utils/utils';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {

  @Input() expireDate: Date;
  public remainingTime: string;
  private timerId: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.timerTickFn(); // to avoid 1s delay
    if (this.remainingTime) {
      this.timerId = setInterval(this.timerTickFn, 1000);
    }
  }

  private timerTickFn = () => {
    this.remainingTime = calculateRemainingTime(this.expireDate);
    if (!this.remainingTime) {
      clearInterval(this.timerId);
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.timerId);
  }

}
