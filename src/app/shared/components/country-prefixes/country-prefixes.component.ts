import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export const EUROPEAN_COUNTRIES = [
  { "name": "Albania", "prefix": "+355" },
  { "name": "Andorra", "prefix": "+376" },
  { "name": "Armenia", "prefix": "+374" },
  { "name": "Austria", "prefix": "+43" },
  { "name": "Azerbaijan", "prefix": "+994" },
  { "name": "Belarus", "prefix": "+375" },
  { "name": "Belgium", "prefix": "+32" },
  { "name": "Bosnia and Herzegovina", "prefix": "+387" },
  { "name": "Bulgaria", "prefix": "+359" },
  { "name": "Croatia", "prefix": "+385" },
  { "name": "Cyprus", "prefix": "+357" },
  { "name": "Czech Republic", "prefix": "+420" },
  { "name": "Denmark", "prefix": "+45" },
  { "name": "Estonia", "prefix": "+372" },
  { "name": "Finland", "prefix": "+358" },
  { "name": "France", "prefix": "+33" },
  { "name": "Georgia", "prefix": "+995" },
  { "name": "Germany", "prefix": "+49" },
  { "name": "Greece", "prefix": "+30" },
  { "name": "Hungary", "prefix": "+36" },
  { "name": "Iceland", "prefix": "+354" },
  { "name": "Ireland", "prefix": "+353" },
  { "name": "Italy", "prefix": "+39" },
  { "name": "Kazakhstan", "prefix": "+7" },
  { "name": "Kosovo", "prefix": "+383" },
  { "name": "Latvia", "prefix": "+371" },
  { "name": "Liechtenstein", "prefix": "+423" },
  { "name": "Lithuania", "prefix": "+370" },
  { "name": "Luxembourg", "prefix": "+352" },
  { "name": "Malta", "prefix": "+356" },
  { "name": "Moldova", "prefix": "+373" },
  { "name": "Monaco", "prefix": "+377" },
  { "name": "Montenegro", "prefix": "+382" },
  { "name": "Netherlands", "prefix": "+31" },
  { "name": "North Macedonia", "prefix": "+389" },
  { "name": "Norway", "prefix": "+47" },
  { "name": "Poland", "prefix": "+48" },
  { "name": "Portugal", "prefix": "+351" },
  { "name": "Romania", "prefix": "+40" },
  { "name": "Russia", "prefix": "+7" },
  { "name": "San Marino", "prefix": "+378" },
  { "name": "Serbia", "prefix": "+381" },
  { "name": "Slovakia", "prefix": "+421" },
  { "name": "Slovenia", "prefix": "+386" },
  { "name": "Spain", "prefix": "+34" },
  { "name": "Sweden", "prefix": "+46" },
  { "name": "Switzerland", "prefix": "+41" },
  { "name": "Turkey", "prefix": "+90" },
  { "name": "Ukraine", "prefix": "+380" },
  { "name": "United Kingdom", "prefix": "+44" },
  { "name": "Vatican City", "prefix": "+379" }
];

@Component({
  selector: 'app-country-prefixes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-prefixes.component.html',
  styleUrls: ['./country-prefixes.component.scss']
})
export class CountryPrefixesComponent {

  constructor() {
    console.log(EUROPEAN_COUNTRIES);
  }


}
