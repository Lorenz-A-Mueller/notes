import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() text:string | undefined
  @Output() btnClick = new EventEmitter


  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {this.btnClick.emit()}

}
