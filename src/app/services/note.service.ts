import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { AngularFireAuth } from '@angular/fire/auth';

export class Notebook {
  _id: String
  user: String;
  notes: Note[];
}

export class NoteVersion {
  _id: String
  content: String;
  time: Date;

  constructor(content) {
    this.content = content;
    this.time = new Date();
  }
}

export class Note {
  id: string;
  _owner: String;
  content: String;
  versions: Array<NoteVersion>;
  isTrashed: Boolean;

  constructor(content?: string) {
    this.content = content || "";
    this.versions = [];
    this.isTrashed = false;
  }
}

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notes: AngularFireList<Note>;
  userId: String;

  private noteSource = new BehaviorSubject(new Note);
  private notesSource = new BehaviorSubject([]);
  currentNote = this.noteSource.asObservable();
  userNotes = this.notesSource.asObservable();

  constructor(private db: AngularFireDatabase, private auth: AngularFireAuth) {
    this.auth.authState.subscribe(user => {
      if (user) this.userId = user.uid;
        this.getNotesList(this.userId).valueChanges().subscribe(
          
          notes => {
            this.changeNotes(notes);
            // this.createNote(new Note('Clams'));
          }
      );
    })
   }

   ngOnInit(): void {

   }

   getNotesList(userId: String): AngularFireList<Note> {
    if (!userId) return;
    this.notes = this.db.list(`notes/${userId}`);
    return this.notes;
   }

   createNote(note: Note) {
    note.id = this.db.createPushId();

    this.notes.set(note.id, note);
    //  this.notes.push(note).then((note)=> {console.log('KEY: ', note.key)});
   }
   changeNote(note: Note) {
    this.noteSource.next(note);
  }
  changeNotes(notes: Note[]) {
    this.notesSource.next(notes);
  }
  updateNote(note: Note) {
    this.notes.update(note.id, note);
  }
}
