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
import { Environment } from '../environments/environment';
import { AuthService } from './services/auth.service';
import { FirebaseUIModule } from 'firebaseui-angular';
import { FirebaseUiAuthConfig } from './firebase.module';
import { NoContentPipe } from './pipes/no-content.pipe';
import { NgxMdModule } from 'ngx-md';
import { NoteMarkdownComponent } from './components/note-markdown/note-markdown.component';
import { TopbarMobileComponent } from './components/topbar-mobile/topbar-mobile.component';
import { TopbarDesktopComponent } from './components/topbar-desktop/topbar-desktop.component';
import {LayoutModule} from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    NoteEditComponent,
    NoteTileComponent,
    AuthDialogComponent,
    NoContentPipe,
    NoteMarkdownComponent,
    TopbarMobileComponent,
    TopbarDesktopComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    AngularFireModule.initializeApp(Environment.firebase, 'totesnote'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgxMdModule.forRoot(),
    FirebaseUIModule.forRoot(FirebaseUiAuthConfig),
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
