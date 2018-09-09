import { Component, OnInit } from '@angular/core';
import { NoteService, Note, NoteVersion } from 'app/services/note.service';

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
    this.noteService.activeUserNote.subscribe(note => this.note = note);
    this.noteService.userNotes.subscribe(notes => this.notes = notes);
  }

  onChange(note) {
    if (this.note.versions[0].timestamp > +new Date + 10000) {
      let version = new NoteVersion(note);
      this.note.versions.unshift(version);
  
      this.noteService.updateUserNote(this.note);
      console.log(this.notes);
    }

  }
}
