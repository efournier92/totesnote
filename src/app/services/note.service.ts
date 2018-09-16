import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { AngularFireAuth } from '@angular/fire/auth';

export class NoteVersion {
  content: String;
  timestamp: number;

  constructor(content) {
    this.content = content;
    this.timestamp = +new Date;
  }
}

export class Note {
  id: string;
  _owner: String;
  content: String;
  versions: NoteVersion[];
  isTrashed: Boolean;

  constructor(content?: string) {
    this.content = content || "";
    this.versions = [new NoteVersion(content)];
    this.isTrashed = false;
  }
}

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notes: AngularFireList<Note>;
  userId: String;

  constructor(private db: AngularFireDatabase, private auth: AngularFireAuth) {
    this.auth.authState.subscribe(user => {
      if (user) this.userId = user.uid;
      this.getUserNotes(this.userId).valueChanges().subscribe(
        notes => {
          this.updateUserNotesEvent(notes);
        }
      );
    });
  }

  private activeUserNoteSource = new BehaviorSubject(new Note);
  activeUserNote = this.activeUserNoteSource.asObservable();

  switchActiveNoteEvent(note: Note) {
    this.activeUserNoteSource.next(note);
  }

  private userNotesSource = new BehaviorSubject([]);
  userNotes = this.userNotesSource.asObservable();

  updateUserNotesEvent(notes: Note[]) {
    this.userNotesSource.next(notes);
  }

  getUserNotes(userId: String): AngularFireList<Note> {
    if (!userId) return;
    this.notes = this.db.list(`notes/${userId}`);
    return this.notes;
  }

  createUserNote(note: Note) {
    note.id = this.db.createPushId();
    this.notes.set(note.id, note);
  }

  updateUserNote(note: Note) {
    this.notes.update(note.id, note);
  }

  deleteUserNote(note: Note) {
    this.notes.remove(note.id);
  }
}
