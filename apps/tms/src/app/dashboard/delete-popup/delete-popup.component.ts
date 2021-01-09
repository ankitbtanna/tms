import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { TenderGridModel } from '../models/tender-grid.model';

@Component({
  selector: 'tms-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrls: ['./delete-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeletePopupComponent {
  @Input()
  tender: TenderGridModel;

  @Output()
  onDelete: EventEmitter<TenderGridModel> = new EventEmitter();

  @Output()
  onCancel: EventEmitter<void> = new EventEmitter();

  isDeletingTender = false;

  delete(): void {
    this.setDeletingTender(true);
    this.onDelete.emit(this.tender);
  }

  cancel(): void {
    this.onCancel.emit();
  }

  setDeletingTender(isDeleting: boolean): void {
    this.isDeletingTender = isDeleting;
  }
}
