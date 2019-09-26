import { Component } from '@angular/core';
import { CityDTO } from './DTOs/CityDTO';
import { CityService } from './Services/city.service';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FlightSearchv1';
  kalkisSehri:CityDTO[];
  varisSehri:CityDTO[];

  constructor(private serviceCity:CityService,private router: Router) {
   this.kalkisSehri = serviceCity.getKalkisSehri();
   this.varisSehri = serviceCity.getVarisSehri();
 
  }

  getData(){
    this.router.navigate(['FlightList'])
  }
}
 