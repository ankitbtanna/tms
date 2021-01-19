import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'tms-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss']
})
export class PDFViewerComponent {
    @Input() title: string;

    @Input() pdfSrc = 'https://storage.googleapis.com/tms-docs/sample-pdf.pdf';
    // 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
    // https://storage.googleapis.com/tms-docs/sample-pdf.pdf

    @Output() onClose: EventEmitter<void> = new EventEmitter();

    close(): void {
      this.pdfSrc = undefined;
      this.onClose.emit();
    }
}
