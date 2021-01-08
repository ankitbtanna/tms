import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { NgModule } from '@angular/core';

@NgModule()
export class IconRegistryModule {
  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.iconRegistry.addSvgIcon(
      'loading',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/loading-spinner.svg')
    );
  }
}
