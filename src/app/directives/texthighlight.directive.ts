import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTexthighlight]',
})
export class TexthighlightDirective {
  constructor(private domEle: ElementRef) {}
  @HostListener('mouseenter') onMouseEnter() {
    this.changeHighLight('yellow');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.changeHighLight('');
  }
  private changeHighLight(color: string) {
    this.domEle.nativeElement.style.backgroundColor = color;
  }
}
