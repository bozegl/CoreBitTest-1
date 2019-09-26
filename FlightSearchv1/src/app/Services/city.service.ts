import { Injectable } from '@angular/core';
import { CityDTO } from '../DTOs/CityDTO';

@Injectable({
  providedIn: 'root'
})

export class CityService {

  cityKalkis: CityDTO[] =
  [
    {
      id:1,
      Name:"İstanbul"  
     }
  ] 

   cityVaris: CityDTO[] =
   [
     {
       id:1,
       Name:"Newyork"  
      }
   ] 

   filterCity: CityDTO[] =
  [
    {
      id:1,
      Name:"İstanbul"  
     },
     {
      id:2,
      Name:"İzmir"  
    },
    {
     id:3,
     Name:"Ankara"  
    }
  ]
  constructor() { 

    
  }

  getKalkisSehri():CityDTO[]
{
  return this.cityKalkis;
}

getVarisSehri():CityDTO[]
{
  return this.cityVaris;
 
}


getfilterCity():CityDTO[]
{
  return this.filterCity;
 
}
}
