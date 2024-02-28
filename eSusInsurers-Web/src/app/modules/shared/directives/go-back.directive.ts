import { Directive, HostListener } from '@angular/core';
import { Location } from '@angular/common';

@Directive({
  selector: '[appGoBack]'
})
export class GoBackDirective {
  @HostListener('click', ['$event']) onClick(event: MouseEvent) {
    event.stopPropagation();
    this.location.back();
  }

  constructor(
    private location: Location
  ) { }
}
