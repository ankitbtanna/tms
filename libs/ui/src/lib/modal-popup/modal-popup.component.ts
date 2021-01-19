import {
  Component,
  EventEmitter,
  Output,
  TemplateRef,
  ViewChild
} from '@angular/core';

import { DialogConfig } from './models/dialog.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'tms-modal-popup',
  templateUrl: './modal-popup.component.html'
})
export class ModalPopupComponent {
  constructor(public dialog: MatDialog) { }

  @Output()
  onClose: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  onOpen: EventEmitter<void> = new EventEmitter<void>()

  @ViewChild('template')
  template: TemplateRef<any>;

  open(config?: DialogConfig): void {
    this.onOpen.emit();
    this.dialog.open(this.template, config);
  }

  close(): void {
    this.dialog?.closeAll();
    this.onClose.emit();
  }
}
