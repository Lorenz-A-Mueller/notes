import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Notes - Angular App';
  notes: string[] = ["abc", "def"]

  created_text!: string

  createNote() {
    console.log('this.notes: ', this.notes)
    this.notes.push(this.created_text)
  }

  deleteNote(note:string) {
    console.log('this.notes: ', this.notes)
    console.log('note: ', note)
    this.notes = this.notes.filter((one_note) => one_note !== note)
  }
}
