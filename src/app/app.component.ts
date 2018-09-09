import { Component } from '@angular/core';
import { NoteService, Note } from 'app/services/note.service';
import { MatDialog } from '@angular/material';
import { AuthDialogComponent } from 'app/components/auth-dialog/auth-dialog.component';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AuthService } from 'app/services/auth.service';

// import { AuthService, User } from 'app/services/auth.service';

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

  constructor (
    private noteService: NoteService,
    private authService: AuthService,
    private dialog: MatDialog,
    private db: AngularFireDatabase
    // private authService: AuthService,
  ) {
    this.noteService.userNotes.subscribe(
      notes => {
        this.notes = notes;
        console.log('Fire Notes: ', notes);
        // if (this.notes.length) th    is.noteService.createNote(new Note(''));
      }
    );
    
    //   notes => {
    //     this.notes = notes;
    //     console.log('CHANGED: ', this.notes);
    //   }
    // );
    // this.notebook = db.list<Note>('/notebook');
    // this.noteChange = this.notebook.valueChanges();
    // this.noteChange.subscribe(
    //   notes => this.notes = notes
    // )

  }
  // currentNotebook: Notebook = this.notebooks[0]

  ngOnInit() {
    console.log('Notes', this.noteService.notes);
    // this.noteService.currentNote.subscribe(note => this.note = note);
    // console.log('Notebook', this.notebook);
    // this.noteService.getItemsList();
    // this.notebook.push(new Note('First Note'));
    // this.notebook.push(new Note('Second Note'));
    // this.notebook.push(new Note('Third Note'));
    // this.notebook.push(new Note('Fourth Note'));
    // this.notebook.push(new Note('Fifth Note'));
    // this.addBook();

    // this.noteService.changeNote(this.notebook[0]);
  }
  public addBook(): void {
    this.notebook.push(new Note('First Note')).then(x => console.log('DATA: ', this.notebook, x));
}
newNote() {
  this.noteService.createNote(new Note(''));
}
signup() {
  this.authService.signup('','');
}
  openAuthDialog() {
    this.dialog.open(AuthDialogComponent, {
      width: "50%",
    });
  }

}
