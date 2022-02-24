import { CountryService } from './../../services/country.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-view',
  templateUrl: './country-view.component.html',
})
export class CountryViewComponent implements OnInit {
  country!: Country;
  constructor(
    private activateRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.countryService.getCountryForCode(id)),
        tap(console.log)
      )

      .subscribe((resp) => console.log(resp));

    this.activateRoute.params.subscribe(({ id }) => {
      this.countryService.getCountryForCode(id).subscribe((country) => {
        this.country = country
        console.log(this.country);
      });
    });
  }
}
