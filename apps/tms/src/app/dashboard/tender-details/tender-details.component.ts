import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TenderGridModel } from '../models/tender-grid.model';

@Component({
  selector: 'tms-tender-details',
  templateUrl: './tender-details.component.html',
  styleUrls: ['./tender-details.component.scss']
})
export class TenderDetailsComponent {
  @Input() tender: TenderGridModel;
  @Output() onCloseTender: EventEmitter<void> = new EventEmitter();

  close(): void {
    this.onCloseTender.emit();
  }
}
