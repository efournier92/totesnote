import { Component } from '@angular/core';
import { Note } from 'app/models/note'
import { NoteService } from 'app/services/note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navbarOpen: boolean = true;
  notebook: Note[];
  note: Note;

  constructor (private noteService: NoteService) { }

  ngOnInit() {
    this.noteService.currentNote.subscribe(note => this.note = note);
    this.note = new Note('Sample content...');
    this.noteService.changeNote(new Note('New note...'));

    console.log('NOTE: ', this.note);
  }

}
