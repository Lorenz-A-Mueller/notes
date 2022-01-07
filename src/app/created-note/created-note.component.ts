import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'created-note',
  templateUrl: './created-note.component.html',
  styleUrls: ['./created-note.component.css']
})
export class CreatedNoteComponent implements OnInit {
  @Output() deleteClick: EventEmitter<string> = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

  @Input() created_note!: string

  handleDelete(){
    this.deleteClick.emit(this.created_note)
  } 

}
