import { Component, OnInit } from '@angular/core';
import { NoteService, Note } from 'app/services/note.service';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.scss']
})
export class NoteEditComponent implements OnInit {
  note: Note;
  notes: Note[];

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.noteService.currentNote.subscribe(note => this.note = note);
    this.noteService.userNotes.subscribe(notes => this.notes = notes);
  }

  onChange(note) {
    this.noteService.updateNote(this.note);
    // this.noteService.changeNotes(this.notes);
    console.log(this.notes);
  }
}
