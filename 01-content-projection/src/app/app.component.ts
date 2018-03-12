import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver,
        AfterContentInit } from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form-component/auth-form.component';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterContentInit {

  @ViewChild('entry', {read: ViewContainerRef}) entry: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver
  ) {}

  ngAfterContentInit() {
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    const component = this.entry.createComponent(authFormFactory);
    //console.log(component.instance);
    component.instance.title = 'Create Account';
    component.instance.submitted.subscribe(this.loginUser);

  }

  loginUser(user: User) {
    console.log('Login', user);
  }

}