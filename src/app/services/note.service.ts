import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Note } from 'app/models/note'

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private noteSource = new BehaviorSubject(new Note);
  currentNote = this.noteSource.asObservable();

  constructor() { }

  changeNote(note: Note) {
    this.noteSource.next(note);
  }
}
