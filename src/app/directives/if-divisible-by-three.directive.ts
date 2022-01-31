import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfDivisibleByThree]'
})
export class IfDivisibleByThreeDirective {
  @Input() set appIfDivisibleByThree(arg: number) {
    if (arg % 3 === 0) {
      this.vcRef.createEmbeddedView(this.templateRef)
    } else {
      this.vcRef.clear()
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef ) { }

}
