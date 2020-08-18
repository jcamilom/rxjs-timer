import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeDisplayComponent {

  @Input() time: string;

}
