import { Component, OnInit } from '@angular/core';
import { CityDTO } from '../DTOs/CityDTO';
import { CityService } from '../Services/city.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  kalkisSehri:CityDTO[];
  varisSehri:CityDTO[];
  constructor(private serviceCity:CityService,private router: Router) { 
    this.kalkisSehri = serviceCity.getKalkisSehri();
    this.varisSehri = serviceCity.getVarisSehri();
  }

  ngOnInit() {
  }

  getData(){
    this.router.navigate(['FlightList'])
  }
}
