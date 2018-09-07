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
  ],
})

export class MaterialModule { }
