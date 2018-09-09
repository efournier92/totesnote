import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteMarkdownComponent } from './note-markdown.component';

describe('NoteMarkdownComponent', () => {
  let component: NoteMarkdownComponent;
  let fixture: ComponentFixture<NoteMarkdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteMarkdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteMarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
