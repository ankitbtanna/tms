import { Component, Input } from '@angular/core';

@Component({
  selector: 'tms-overlay-spinner',
  templateUrl: './overlay-spinner.component.html',
  styleUrls: ['./overlay-spinner.component.scss']
})
export class OverlaySpinnerComponent {
  @Input()
  loadingText = 'Loading...';

  @Input()
  size = 16;
}
