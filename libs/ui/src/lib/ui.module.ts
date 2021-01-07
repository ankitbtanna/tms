import { AlertComponent } from './alert/alert.component';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ModalPopupComponent } from './modal-popup/modal-popup.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, MatIconModule, MatDialogModule],
  declarations: [AlertComponent, ModalPopupComponent],
  exports: [AlertComponent, ModalPopupComponent]
})
export class UiModule {}
