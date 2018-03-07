import { Component, Output, EventEmitter, ContentChild, AfterContentInit } from '@angular/core';

import { User } from '../auth-form.interface';
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html'
})
export class AuthFormComponent implements AfterContentInit{

  public showMessage: boolean = false;

  // configure a content child query
  @ContentChild(AuthRememberComponent) remember: AuthRememberComponent;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

  ngAfterContentInit() {
    if (this.remember) {
      // subscribe to the output event that is raised by AuthRememberComponent
      // the the check box is checked
      this.remember.checked.subscribe((checked: boolean) => this.showMessage = checked)
    }
  }

}
