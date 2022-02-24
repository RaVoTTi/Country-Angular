import { Country } from './../../interfaces/country.interface';
import { CountryService } from './../../services/country.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-capital.component.html',
  styles: [
    `
      tbody {
        cursor: pointer;
      }
    `,
  ],
})
export class ByCapitalComponent {
  termino: string = '';
  terminoErr: string = '';
  searchError: Boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  search(termino: string) {
    this.terminoErr = termino;
    this.termino = termino;
    this.searchError = false;
    this.countryService.searchCapital(this.termino).subscribe({
      next: (countries) => {
        this.countries = countries.slice(0, 20);
      },
      error: (err) => {
        this.searchError = true;
        this.countries = [];
      },
    });
    this.termino = '';
  }
  debounce(value: string){
    this.searchError = false
    console.log(value, 'debounce')

  }
}
