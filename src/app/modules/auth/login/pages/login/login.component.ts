import { Component } from '@angular/core';
import { LoginHeaderComponent } from '../login-header/login-header.component';
import { LoginNavComponent } from '../login-nav/login-nav.component';
import { LoginCountrySelectionComponent } from '../login-country-selection/login-country-selection.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginHeaderComponent,LoginNavComponent,LoginCountrySelectionComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  country:any;

}
