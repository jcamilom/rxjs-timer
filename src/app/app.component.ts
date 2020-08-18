import { Component, OnInit, OnDestroy } from '@angular/core';

import { MOCK_CONTRACTS } from './utils/contracts-mock';
import { Contract } from './models/contract.model';
import { calculateRemainingTime } from 'src/app/utils/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public contracts: Contract[] = MOCK_CONTRACTS;
  private timerId: ReturnType<typeof setInterval>;
  private nLiveContracts: number;

  ngOnInit(): void {
    this.timerTickFn(); // to avoid 1s delay
    if (this.nLiveContracts > 0) {
      this.timerId = setInterval(this.timerTickFn, 1000);
    }
  }

  private timerTickFn = () => {
    this.nLiveContracts = 0;
    this.contracts.forEach(contract => {
      if (contract.state === 'live') {
        contract.remainingTime = calculateRemainingTime(contract.expiresAt);
        if (contract.remainingTime) {
          this.nLiveContracts++;
        }
      }
    });
    if (this.nLiveContracts === 0) {
      clearInterval(this.timerId);
    }
  }

  ngOnDestroy(): void {
    clearTimeout(this.timerId);
  }

}
