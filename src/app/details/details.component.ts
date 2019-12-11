import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { ActivatedRoute } from '@angular/router';
import { Countries } from '../countries.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  country: Countries;

  id: number

  constructor(private service : CountriesService,
              private route : ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id')
    this.detailsCountry();
  }

  detailsCountry(){
    this.service.details(this.id).subscribe(
      (data) => {this.country = data}
    )
  }

}
