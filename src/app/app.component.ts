import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MOCK_CONTRACTS } from './utils/contracts-mock';
import { Contract } from './models/contract.model';
import { ContractTimerService } from './services/contract-timer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ContractTimerService]
})
export class AppComponent implements OnInit {

  public contracts: Contract[] = MOCK_CONTRACTS;
  public contracts$: Observable<Contract[]>;

  constructor(private ctService: ContractTimerService) { }

  ngOnInit(): void {
    this.contracts$ = this.ctService.countdown(this.contracts);
  }

}
