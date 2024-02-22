import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginModule } from './login/login.module';


@NgModule({
  declarations: [],
  imports: [
    LoginModule,
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
