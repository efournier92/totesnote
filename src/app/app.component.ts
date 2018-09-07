import { Component } from '@angular/core';
import { Note } from 'app/models/note'
import { NoteService } from 'app/services/note.service';
import { MatDialog } from '@angular/material';
import { AuthDialogComponent } from 'app/components/auth-dialog/auth-dialog.component';
// import { AuthService, User } from 'app/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navbarOpen: boolean = true;
  notebook: Note[] = [];
  note: Note;

  constructor (
    private noteService: NoteService,
    private dialog: MatDialog,
    // private authService: AuthService,
  ) { }

  ngOnInit() {
    this.noteService.currentNote.subscribe(note => this.note = note);

    this.notebook.push(new Note('First Note'));
    this.notebook.push(new Note('Second Note'));
    this.notebook.push(new Note('Third Note'));
    this.notebook.push(new Note('Fourth Note'));
    this.notebook.push(new Note('Fifth Note'));

    this.noteService.changeNote(this.notebook[0]);
  }

  openAuthDialog() {
    this.dialog.open(AuthDialogComponent);
  }

}
