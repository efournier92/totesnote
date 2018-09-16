import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatSidenavModule,
  MatTabsModule,
  MatInputModule,
  MatCheckboxModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatDividerModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatStepperModule,
  MatFormFieldModule,
  MatButtonToggleModule,
  MatMenuModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatTabsModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatStepperModule,
    MatFormFieldModule,
    MatMenuModule,
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatTabsModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatMenuModule,
  ],
})

export class MaterialModule { }
