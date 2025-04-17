import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  elementRef = inject(ElementRef);

  constructor() { }

  ngOnInit(){
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }

}
