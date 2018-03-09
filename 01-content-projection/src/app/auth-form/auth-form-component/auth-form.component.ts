import {
  Component, Output, EventEmitter,ViewChild, ViewChildren, AfterViewInit,
  ContentChildren, AfterContentInit, QueryList, ChangeDetectorRef, ElementRef
} from '@angular/core';

import { User } from '../auth-form.interface';
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';
import { AuthMessageComponent } from '../auth-message/auth-message.component';

@Component({
  selector: 'app-auth-form',
  styles: ['.email { border-color: #9f72e6;} '],
  templateUrl: './auth-form.component.html'
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {

  public showMessage: boolean = false;

  @ViewChild('email') email: ElementRef;

  // configure a viewchild query
  @ViewChildren(AuthMessageComponent) messages: QueryList<AuthMessageComponent>;

  // configure a content child query
  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor(private cd: ChangeDetectorRef) { }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

  ngAfterViewInit() {
    this.email.nativeElement.setAttribute('placeholder', 'Enter your email address...');
    this.email.nativeElement.classList.add('email');
    this.email.nativeElement.focus();
    console.log(this.email.nativeElement);
    // WE ARE MUTATING DATA AFTER THE VIEW HAS BEEN RENDERED.
    // THIS IS NOT RECOMMENDED PRACTICE.
    if (this.messages) {
      this.messages.forEach(message => {
        message.days = 30;
      })
      // tell the change detector that changes have been made after the view has been rendered
      this.cd.detectChanges();
    }
  }

  ngAfterContentInit() {
    if (this.remember) {
      // subscribe to the output event that is raised by EACH AuthRememberComponent
      // the the check box is checked
      this.remember.forEach((item) => {
        item.checked.subscribe((checked: boolean) => this.showMessage = checked)
      })
    }
  }

}
