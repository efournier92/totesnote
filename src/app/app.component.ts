import { Component } from '@angular/core';
import { NoteService, Note } from 'app/services/note.service';
import { MatDialog } from '@angular/material';
import { AuthDialogComponent } from 'app/components/auth-dialog/auth-dialog.component';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AuthService } from 'app/services/auth.service';

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

  constructor(
    private noteService: NoteService,
    private authService: AuthService,
    private dialog: MatDialog,
  ) {
    this.noteService.userNotes.subscribe(
      notes => {
        this.notes = notes;
        console.log('Fire Notes: ', notes);
      }
    );
  }

  ngOnInit() {
    this.noteService.activeUserNote.subscribe(
      note => this.note = note
    )
  }

  public addBook(): void {
    this.notebook.push(new Note('First Note')).then(x => console.log('DATA: ', this.notebook, x));
  }

  createNote() {
    this.noteService.createUserNote(new Note(''));
  }

  deleteNote() {
    this.noteService.deleteUserNote(this.note);
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

}
