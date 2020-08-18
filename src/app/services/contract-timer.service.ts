import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { takeWhile, map } from 'rxjs/operators';

import { Contract } from 'src/app/models/contract.model';
import { calculateRemainingTime } from 'src/app/utils/utils';

@Injectable()
export class ContractTimerService {

  private contracts: Contract[];
  private nLiveContracts: number;

  constructor() { }

  public countdown(contracts: Contract[]): Observable<Contract[]> {
    this.contracts = contracts;
    return timer(0, 1000)
      .pipe(
        map(this.setRemainingTime),
        takeWhile(() => this.nLiveContracts > 0, true)
      );
  }

  private setRemainingTime = (): Contract[] => {
    this.nLiveContracts = 0;
    this.contracts.forEach(contract => {
      if (contract.state === 'live') {
        contract.remainingTime = calculateRemainingTime(contract.expiresAt);
        if (contract.remainingTime) {
          this.nLiveContracts++;
        }
      }
    });
    return this.contracts;
  }

}
