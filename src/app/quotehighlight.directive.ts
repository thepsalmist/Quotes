import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appQuotehighlight]'
})
export class QuotehighlightDirective {

  constructor(private elem: ElementRef) {
    this.elem.nativeElement.style.backgroundColor = 'yellow';
  }

}
