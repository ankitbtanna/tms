import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';
import { ToasterComponent } from './toaster/toaster.component';
import { ToasterService } from './services/toaster.service';

@NgModule({
  imports: [MatSnackBarModule],
  declarations: [ToasterComponent],
  providers: [ToasterService],
  exports: [ToasterComponent]
})
export class ToasterModule {}
