import { Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterGreenText]'
})
export class BetterGreenTextDirective implements OnInit{

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
      this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'green')
  }
}
