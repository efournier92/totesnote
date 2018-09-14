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
import { FirebaseUiAuthConfig } from './firebase.module'
import { NoContentPipe } from './pipes/no-content.pipe';
import { NgxMdModule } from 'ngx-md';
import { NoteMarkdownComponent } from './components/note-markdown/note-markdown.component';
import { SidenavDesktopComponent } from './components/sidenav-desktop/sidenav-desktop.component';
import { SidenavMobileComponent } from './components/sidenav-mobile/sidenav-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteEditComponent,
    NoteTileComponent,
    AuthDialogComponent,
    NoContentPipe,
    NoteMarkdownComponent,
    SidenavDesktopComponent,
    SidenavMobileComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
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
