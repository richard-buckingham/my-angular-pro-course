import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[credit-card]'
})
export class CreditCardDirective {
  // define an event listener for the host.
  // the host is the element we have bound the directive to.
  @HostListener('input', ['$event'])
  onKeyDown(event : KeyboardEvent) {
    console.log(event);
    // cast input to HTMLInputElement
    const input = event.target as HTMLInputElement;

    // trim out any existing white space
    let trimmed = input.value.replace(/\s+/g, ''); 

    // trim the string to 16 char
    if (trimmed.length > 16) {
      trimmed = trimmed.substr(0, 16);
    }

    let numbers = [];
    for (let i = 0; i < trimmed.length; i += 4) {
      numbers.push(trimmed.substr(i, 4));
    }
    console.log(numbers);

    input.value = numbers.join(' ');

  }

}