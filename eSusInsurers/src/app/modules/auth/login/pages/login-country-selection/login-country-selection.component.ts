import { Component } from '@angular/core';

@Component({
  selector: 'app-login-country-selection',
  standalone: true,
  imports: [],
  templateUrl: './login-country-selection.component.html',
  styleUrl: './login-country-selection.component.css'
})
export class LoginCountrySelectionComponent {
  country:any;

  //constructor(private cookieService : CookieService) { }

  ngOnInit() {
   //this.country = this.cookieService.get('country');
  }
  selectCountry(country:any){
    // this.cookieService.set('country',country);
    // this.countryChange.emit(country)
  }
}
