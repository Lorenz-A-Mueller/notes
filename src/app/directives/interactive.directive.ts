import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInteractive]'
})
export class InteractiveDirective {

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  @HostBinding('style.fontWeight') fontWeight: string = 'normal'
  
  @HostListener ('mouseover') mouseover() {

    // use the following line if HostBinding is not used
    this.renderer.setStyle(this.elRef.nativeElement, 'fontWeight', 'bold')
    // this.fontWeight = 'bold'
  }

  @HostListener ('mouseleave') mouseleave() {
    this.renderer.setStyle(this.elRef.nativeElement, 'fontWeight', 'normal')
    // this.fontWeight = 'normal'
  }
}
