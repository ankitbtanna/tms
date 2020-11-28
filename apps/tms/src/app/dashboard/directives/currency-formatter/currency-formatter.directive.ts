import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[tmsCurrencyFormatter]',
})
export class CurrencyFormatterDirective {
  private formattedValue = '';
  constructor(private el: ElementRef) {}

  @HostListener('focus') onMouseEnter() {
    const input = this.el.nativeElement.value;
    const inputWithoutSeparators = input.replace(/,/g, '');
    this.el.nativeElement.value = inputWithoutSeparators;
  }

  @HostListener('blur') onMouseLeave() {
    console.log('blur ', this.el.nativeElement.value);
    this.el.nativeElement.value = this.formattedValue;
  }

  @HostListener('keydown') onKeyDown() {
    const input = Number(this.el.nativeElement.value);
    this.formattedValue = input.toLocaleString('en-IN');
  }
}
