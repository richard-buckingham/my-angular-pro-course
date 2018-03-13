import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver,
        AfterContentInit, ComponentRef } from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form-component/auth-form.component';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterContentInit {

  component: ComponentRef<AuthFormComponent>
  
  @ViewChild('entry', {read: ViewContainerRef}) entry: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver
  ) {}

  ngAfterContentInit() {
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    this.component = this.entry.createComponent(authFormFactory);
    //console.log(component.instance);
    this.component.instance.title = 'Create Account';
    this.component.instance.submitted.subscribe(this.loginUser);

  }

  destroyComponent() {
    this.component.destroy();
  }

  loginUser(user: User) {
    console.log('Login', user);
  }

}