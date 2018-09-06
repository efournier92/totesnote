export class NoteVersion {
    content: String;
    time: Date;
  
    constructor(content) {
      this.content = content;
      this.time = new Date();
    }
  }
  
  export class Note {
    _id: String;
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
  