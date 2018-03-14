import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[credit-card]'
})
export class CreditCardDirective {
  
  @HostBinding('style.border') border: string;
    
  // define an event listener for the host.
  // the host is the element we have bound the directive to.
  @HostListener('input', ['$event'])

  onKeyDown(event : KeyboardEvent) {
    this.processOnKeyDown(event);
    this.processHostBinding(event);
  }

  private processHostBinding(event : KeyboardEvent) {
    this.border = '';
    const input = event.target as HTMLInputElement;
    let trimmed = this.trim(input.value);
    // test the trimmed only contains numbers
    if (/[^\d]+/.test(trimmed)) {
      console.log('we have non numeric characters');
      this.border = '1px solid red';
    }
  }

  private trim(untrimmed: string) : string {
    let trimmed = untrimmed.replace(/\s+/g, ''); 

    // trim the string to 16 char
    if (trimmed.length > 16) {
      trimmed = trimmed.substr(0, 16);
    }

    return trimmed;
  }

  private processOnKeyDown(event : KeyboardEvent) {
    // cast input to HTMLInputElement
    const input = event.target as HTMLInputElement;

    // trim out any existing white space
    let trimmed = this.trim(input.value);    

    let numbers = [];
    for (let i = 0; i < trimmed.length; i += 4) {
      numbers.push(trimmed.substr(i, 4));
    }
    input.value = numbers.join(' ');
  }

}