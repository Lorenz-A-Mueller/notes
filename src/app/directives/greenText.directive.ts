import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[greenText]'
})
export class GreenTextDirective implements OnInit {
    constructor(private elementRef: ElementRef) {
    }

    ngOnInit() {
        this.elementRef.nativeElement.style.color = "green"
    }
}