import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Countries } from '../countries.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  countryForm: FormGroup;
  id: number;
  country: Countries

  constructor(private service : CountriesService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    this.id = +this.route.snapshot.paramMap.get('id')

    this.countryForm = this.fb.group({
      name: [],
      language: [],
      population: [],
      area: []
    })

    this.getDetail();

    //setTimeout(() => {this.setValue()},500)

    //this.setValue();
  }

  getDetail(){
    this.service.details(this.id).subscribe(
      (data) => {this.country= data},
      (err) => {console.log(err);
      () => {this.setValue()}
      }
    )
  }

  setValue(){
    this.countryForm.patchValue({
      name: this.country.name,
      language: this.country.language,
      population: this.country.population,
      area: this.country.area
    })
  }

  updateCountry(){
    this.service.update(this.id, this.countryForm.value).subscribe(
      () => {this.router.navigate(['get'])}
    )
  }

}
