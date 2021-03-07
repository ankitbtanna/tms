import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatTabsModule } from '@angular/material/tabs'
import { NgModule } from '@angular/core';

const MAT_MODULES = [
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatStepperModule,
  MatRadioModule,
  MatSelectModule,
  MatExpansionModule,
  MatDialogModule,
  MatDatepickerModule,
  MatButtonToggleModule,
  MatTabsModule,
  FlexLayoutModule
];

@NgModule({
  imports: MAT_MODULES,
  exports: MAT_MODULES
})
export class MaterialModule { }
