import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToasterComponent } from '../toaster/toaster.component';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
    duration = 5000;

    constructor(private snackBar: MatSnackBar) {}

    showToast(message: string, type = 'success'): void {
      this.snackBar.openFromComponent(ToasterComponent, {
        data: {
          message,
          type
        },
        duration: this.duration
      });
    }
}
