import { Component, Output, EventEmitter, ViewChild, AfterViewInit, 
        ContentChildren, AfterContentInit, QueryList } from '@angular/core';

import { User } from '../auth-form.interface';
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';
import { AuthMessageComponent } from '../auth-message/auth-message.component';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html'
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {

  public showMessage: boolean = false;

  // configure a viewchild query
  @ViewChild(AuthMessageComponent) message: AuthMessageComponent; 

  // configure a content child query
  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

  ngAfterViewInit() {
    //  this will cause an error to be thrown....
    //  this.message.days = 30;
  }

  ngAfterContentInit() {
    // change the data before the view is initialised...
    if (this.message) {
      this.message.days = 30;
    }
    if (this.remember) {
      // subscribe to the output event that is raised by EACH AuthRememberComponent
      // the the check box is checked
      this.remember.forEach((item) => {
        item.checked.subscribe((checked: boolean) => this.showMessage = checked)
      })
    }
  }

}
