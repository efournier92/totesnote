import { Component, OnInit, Input } from '@angular/core';
import { NoteService, Note } from 'app/services/note.service';

@Component({
  selector: 'app-note-tile',
  templateUrl: './note-tile.component.html',
  styleUrls: ['./note-tile.component.scss']
})
export class NoteTileComponent implements OnInit {
  @Input() note: Note;

  constructor(private noteService: NoteService) { }

  ngOnInit() { }

  switchNote($event) {
    this.noteService.switchActiveNoteEvent($event);
    console.log($event);
  }
}
