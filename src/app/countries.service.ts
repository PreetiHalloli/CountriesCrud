import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Countries } from './countries.model';

// when to use here n when to use in app module
@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  countryUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Countries[]>{
    return this.http.get<Countries[]>(this.countryUrl)
  }

  details(id: number): Observable<Countries>{
    return this.http.get<Countries>(this.countryUrl + "/" + id )
  }

  add(country: Countries): Observable<Countries>{
    return this.http.post<Countries>(this.countryUrl, country)
  }

  update(id: number, country: Countries): Observable<void>{
    return this.http.put<void>(this.countryUrl + "/" + id, country)
  }

  delete(id: number): Observable<void>{
    return this.http.delete<void>(this.countryUrl+ "/" + id )
  }
  
}
