import { Component, ViewChild } from '@angular/core';
import { NoteService, Note, NoteVersion } from 'app/services/note.service';
import { MatDialog, MatSidenav } from '@angular/material';
import { AuthDialogComponent } from 'app/components/auth-dialog/auth-dialog.component';
import { AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AuthService } from 'app/services/auth.service';
import { BreakpointObserver } from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navbarOpen: boolean = true;
  notebook: AngularFireList<Note>;
  note: Note;
  noteChange: Observable<any[]>;
  notes: Note[];
  isTrashMode: Boolean = false;
  modeMenu: string = 'edit';
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(
    private noteService: NoteService,
    private authService: AuthService,
    private dialog: MatDialog,
    private breakpointObserver: BreakpointObserver,
  ) {
    this.noteService.userNotes.subscribe(
      notes => {
        if (notes.length !== 0) {
          this.notes = notes;
          this.noteService.switchActiveNoteEvent(this.notes[0]);
        }
      }
    );
  }

  ngOnInit() {
    this.noteService.activeUserNote.subscribe(
      note => {
        this.note = note
      }
    )

    const layoutChanges = this.breakpointObserver.observe([
      '(max-width: 599px)',
    ]);
    


    this.changeScreenSize();
    layoutChanges.subscribe(result => {
      this.changeScreenSize();
    })

  
  }

  public changeScreenSize(){
    const isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');
    isSmallScreen ? this.sidenav.close() : this.sidenav.open();
  }


  public addBook(): void {
    this.notebook.push(new Note('First Note')).then(x => console.log('DATA: ', this.notebook, x));
  }

  createNote() {
    this.noteService.createUserNote(new Note('# '));
  }

  saveCurrentNote() {
    let timestamp = this.note.versions[0].timestamp;
    if (timestamp > +new Date - 600000) this.note.versions.shift();
    let version = new NoteVersion(this.note.content);
    this.note.versions.unshift(version);
    this.noteService.updateUserNote(this.note);
  }

  deleteNote() {
    this.note.isTrashed = true;
    this.noteService.updateUserNote(this.note);
    // this.noteService.deleteUserNote(this.note);
    this.noteService.switchActiveNoteEvent(this.notes[0]);
  }

  signup() {
    this.authService.signup('', '');
  }

  openAuthDialog() {
    this.dialog.open(AuthDialogComponent, {
      width: "50%",
    });
  }

  // switchMode(mode: String) {
  //   if (mode === 'markdown') {
  //     this.mode = 'markdown';      
  //   } else {
  //     this.mode = 'edit';
  //   }
  // }
}
