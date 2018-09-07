import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NoteEditComponent } from './components/note-edit/note-edit.component';
import { NoteTileComponent } from './components/note-tile/note-tile.component';
import { AuthDialogComponent } from './components/auth-dialog/auth-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NoteEditComponent,
    NoteTileComponent,
    AuthDialogComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  entryComponents: [
    AuthDialogComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
