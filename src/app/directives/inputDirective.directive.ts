import { Directive, Input, Renderer2, ElementRef, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appInputDirective]'
})
export class InputDirectiveDirective implements OnInit {

  @Input('backgroundColor') background: string | undefined;

  @HostBinding('style.backgroundColor') backgroundColor: string |undefined;

  @HostListener('mouseover') handleMouseOver() {
    this.backgroundColor = "pink"
  }

  @HostListener('mouseleave') handleMouseLeave() {
    this.backgroundColor = "blue"
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.backgroundColor = this.background
  }

}
