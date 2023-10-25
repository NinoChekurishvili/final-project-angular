import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryPrefixesComponent } from './country-prefixes.component';

describe('CountryPrefixesComponent', () => {
  let component: CountryPrefixesComponent;
  let fixture: ComponentFixture<CountryPrefixesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CountryPrefixesComponent]
    });
    fixture = TestBed.createComponent(CountryPrefixesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
