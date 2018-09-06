import { Component, OnInit } from '@angular/core';
import { NoteService } from 'app/services/note.service';
import { Note } from 'app/models/note';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.scss']
})
export class NoteEditComponent implements OnInit {
  note: Note;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.noteService.currentNote.subscribe(note => this.note = note);
  }

}
