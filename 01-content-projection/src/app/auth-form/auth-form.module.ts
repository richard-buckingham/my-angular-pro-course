import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthFormComponent } from './auth-form-component/auth-form.component';
import { AuthRememberComponent } from './auth-remember/auth-remember.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule  ],  
    declarations: [AuthFormComponent, AuthRememberComponent],
  exports: [
    AuthFormComponent,
    AuthRememberComponent
  ]
})
export class AuthFormModule { }
