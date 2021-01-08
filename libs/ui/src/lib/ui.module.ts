import { AlertComponent } from './alert/alert.component';
import { CommonModule } from '@angular/common';
import { IconRegistryModule } from './icon-registry/icon-registry.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ModalPopupComponent } from './modal-popup/modal-popup.component';
import { NgModule } from '@angular/core';
import { OverlaySpinnerComponent } from './overlay-spinner/overlay-spinner.component';

@NgModule({
  imports: [IconRegistryModule, CommonModule, MatIconModule, MatDialogModule],
  declarations: [AlertComponent, ModalPopupComponent, OverlaySpinnerComponent],
  exports: [AlertComponent, ModalPopupComponent, OverlaySpinnerComponent]
})
export class UiModule {}
