import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FlightListService {

  constructor(private http: HttpClient) { }

  getFlightData() 
  {
    return  this.http.get("assets/json/flightData.json");
  }
}
