import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appQuotehighlight]'
})
export class QuotehighlightDirective {

  constructor(private elem: ElementRef) { }
  highlighElement() {
    this.elem.nativeElement.style.backgroundColor = '#F39C12  ';
    this.elem.nativeElement.style.color = 'black';
  }
  ngOnInit() {
    this.highlighElement();
  }
}
