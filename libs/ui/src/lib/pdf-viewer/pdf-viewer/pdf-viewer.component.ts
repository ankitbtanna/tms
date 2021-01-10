import { Component, Input } from '@angular/core';

@Component({
  selector: 'tms-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss']
})
export class PDFViewerComponent {
    @Input() title: string;

    @Input() pdfSrc = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
}
