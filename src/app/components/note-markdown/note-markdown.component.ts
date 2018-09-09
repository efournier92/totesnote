import { Component, OnInit } from '@angular/core';
import { NoteService, Note } from 'app/services/note.service';
import 'prismjs/prism';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-diff';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-perl';

@Component({
  selector: 'app-note-markdown',
  templateUrl: './note-markdown.component.html',
  styleUrls: ['./note-markdown.component.scss']
})
export class NoteMarkdownComponent implements OnInit {
  note: Note;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.noteService.activeUserNote.subscribe(note => this.note = note);
  }
}
