import { Component } from '@angular/core';

import { MOCK_CONTRACTS } from './utils/contracts-mock';
import { Contract } from './models/contract.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public contracts: Contract[] = MOCK_CONTRACTS;
}
