import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from './../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private _rest_url: string = 'https://restcountries.com/v2'
  
  constructor(private http: HttpClient) { }

  searchCountry(query: string) : Observable<Country[]>{

    return this.http.get<Country[]>(`${this._rest_url}/name/${query}`)
  }
  searchCapital(query: string): Observable<Country[]>{
    return this.http.get<Country[]>(`${this._rest_url}/capital/${query}`)
  }
  getCountryForCode(query: string): Observable<Country>{
    return this.http.get<Country>(`${this._rest_url}/alpha/${query}`)
  }
}
