import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { NoteService, Note, NoteVersion } from 'app/services/note.service';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.scss']
})
export class NoteEditComponent implements OnInit {
  note: Note;
  notes: Note[];

  constructor(
    private noteService: NoteService,
    private ngZone: NgZone,
  ) { }

  @ViewChild('cdkTextareaAutosize') autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  ngOnInit() {
    this.noteService.activeUserNote.subscribe(note => this.note = note);
    this.noteService.userNotes.subscribe(notes => this.notes = notes);
  }

  onChange(note) {
    this.noteService.switchActiveNoteEvent(this.note);
  }
}
