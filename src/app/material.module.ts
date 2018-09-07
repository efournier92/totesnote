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
  ],
})

export class MaterialModule { }
