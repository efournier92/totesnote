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
