import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCountrySelectionComponent } from './login-country-selection.component';

describe('LoginCountrySelectionComponent', () => {
  let component: LoginCountrySelectionComponent;
  let fixture: ComponentFixture<LoginCountrySelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginCountrySelectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginCountrySelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
