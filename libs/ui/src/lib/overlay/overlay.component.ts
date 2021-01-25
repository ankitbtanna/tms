import { Component, Input } from '@angular/core';

@Component({
  selector: 'tms-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent {
  @Input()
  loadingText = 'Loading...';
}
