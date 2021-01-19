import { AlertComponent } from './alert/alert.component';
import { CommonModule } from '@angular/common';
import { IconRegistryModule } from './icon-registry/icon-registry.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ModalPopupComponent } from './modal-popup/modal-popup.component';
import { NgModule } from '@angular/core';
import { OverlaySpinnerComponent } from './overlay-spinner/overlay-spinner.component';
import { PDFViewerComponent } from './pdf-viewer/pdf-viewer/pdf-viewer.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ToasterModule } from './toaster/toaster.module';
@NgModule({
  imports: [
    IconRegistryModule,
    CommonModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    ToasterModule,
    MatCardModule,
    PdfViewerModule
  ],
  declarations: [AlertComponent, ModalPopupComponent, OverlaySpinnerComponent, PDFViewerComponent],
  exports: [AlertComponent, ModalPopupComponent, OverlaySpinnerComponent, PDFViewerComponent]
})
export class UiModule {}
