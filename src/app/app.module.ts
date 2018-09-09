import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NoteEditComponent } from './components/note-edit/note-edit.component';
import { NoteTileComponent } from './components/note-tile/note-tile.component';
import { AuthDialogComponent } from './components/auth-dialog/auth-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from './services/auth.service';
import { FirebaseUIModule } from 'firebaseui-angular';
// import * as firebaseui from 'firebaseui';
// import * as firebaseui from 'firebaseui'

import { firebaseUiAuthConfig } from './firebase.module'
import { NoteService } from './services/note.service';
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
    AngularFireModule.initializeApp(environment.firebase, 'totesnote'),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig)
  ],
  providers: [
    AuthService,
  ],
  entryComponents: [
    AuthDialogComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
