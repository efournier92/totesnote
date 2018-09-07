import { Component } from '@angular/core';
import { Note } from 'app/models/note'
import { NoteService } from 'app/services/note.service';
import { AuthService, User } from 'app/services/auth.service';

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
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.noteService.currentNote.subscribe(note => this.note = note);

    this.notebook.push(new Note('First Note'));
    this.notebook.push(new Note('Second Note'));
    this.notebook.push(new Note('Third Note'));
    this.notebook.push(new Note('Fourth Note'));
    this.notebook.push(new Note('Fifth Note'));

    this.noteService.changeNote(this.notebook[0]);

    let user = new User();
    this.authService.register(user).subscribe(
      (resp: any) => {
        this.authService.changeUser(resp);
      }
    );
  }

}
