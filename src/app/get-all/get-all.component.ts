import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { Countries } from '../countries.model';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.css']
})
export class GetAllComponent implements OnInit {

  countries: Countries[];

  constructor(private service : CountriesService) { }

  ngOnInit() {
    this.getCountries();
  }

  getCountries(){
    this.service.getAll().subscribe(
      (data) => {this.countries = data}
    )
  }

  delete(id: number){
    this.service.delete(id).subscribe(
      // (data) => {this.getCountries()},
      // (err) => {console.log(err)},
      // () => {console.log("record deleted") }    
      () => {this.getCountries()}, 
    )
  }

}
