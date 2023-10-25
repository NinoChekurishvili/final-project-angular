import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { EUROPEAN_COUNTRIES } from 'src/app/shared/components/country-prefixes/country-prefixes.component'

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  countries = EUROPEAN_COUNTRIES;
  selectedPrefix = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeRegistrationForm();
  }

  private initializeRegistrationForm(): void {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      surname: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      telephone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });

  }

  onSubmit(): void {
    if (this.selectedPrefix && this.registrationForm.valid) {
      console.log('Customer registration data:', this.registrationForm.value);
    } else if (!this.selectedPrefix) {
      console.warn('Prefix is not selected.');
    }
  }

  onSelectCountry(event: Event) {
    const selectedIndex = (event.target as HTMLSelectElement).selectedIndex;
    this.selectedPrefix = this.countries[selectedIndex].prefix;
  }

}
