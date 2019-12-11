import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  countryForm: FormGroup

  constructor(private service: CountriesService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.countryForm = this.fb.group({
      name: [],
      language: [],
      population: [],
      area:[]
    })
  }

  addCountry(){
    this.service.add(this.countryForm.value).subscribe(
      () => this.router.navigate(['/get'])
    )
  }

}
