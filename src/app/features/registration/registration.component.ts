import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';

import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { EUROPEAN_COUNTRIES } from 'src/app/shared/components/country-prefixes/country-prefixes.component';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/models/user.model';


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent, HttpClientModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers: [UserService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  countries = EUROPEAN_COUNTRIES;
  selectedPrefix = '';
  prefixMessage: string | null = null;
  errorMessage: string = '';


  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) { }

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
      const newUser: User = this.registrationForm.value;

      this.userService.emailExists(newUser.email).pipe(
        switchMap(existingUsers => {
          if (existingUsers && existingUsers.length > 0) {
            throw new Error('Email already registered!');
          }
          return this.userService.register(newUser);
        })
      ).subscribe(
        response => {
          console.log('Customer registered successfully:', response);
          this.registrationForm.reset();
        },
        (error: any) => {
          if (error.message === 'Email already registered!') {
            this.errorMessage = error.message;
            this.cdr.markForCheck();  // Trigger change detection
          } else {
            console.error('Error during registration:', error.message);
          }
        }
      );
    } else if (!this.selectedPrefix) {
      this.prefixMessage = "Prefix is not selected!";
      this.cdr.markForCheck();  // Trigger change detection
      console.warn('Prefix is not selected.');
    }
  }

  onSelectCountry(event: Event) {
    const selectedIndex = (event.target as HTMLSelectElement).selectedIndex;
    this.selectedPrefix = this.countries[selectedIndex].prefix;
    this.prefixMessage = null;
  }

}
