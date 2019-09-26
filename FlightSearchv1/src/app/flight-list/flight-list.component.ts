import { Component, OnInit, ViewChild } from '@angular/core';
import { FlightListService } from '../Services/flight-list.service';
import { CityService } from '../Services/city.service';

var that;
@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
 
 flightData ;
 flightData2;
 filterCity;
 count=0;
  constructor(private service:FlightListService, private cityService:CityService) {
    that =this;
    this.filterCity=cityService.filterCity;
   }

  ngOnInit() {
  this.getFlightData();
  // debugger
  // this.count = this.flightData.length;
  // console.log( this.flightData)    
  // console.log(this.count)    
  }
 
  getFlightData() {  
    var returnData = Array();
    this.service.getFlightData().subscribe(result => {    
      console.log(result)     
      result["data"].epower.cards.forEach(item => {
        if(item.departure!=null && item.departure!=undefined)
        {
          item.departure.forEach(item2 => {
            if(item2.from=="IST" && (item2.to =="NYC" ||item2.to =="JFK" ||item2.to =="EWR" ||item2.to =="LGA" ||item2.to =="NBP" ||item2.to =="NES"))
            {
              returnData.push(item2);
            }
          });
        }
      });
      that.flightData = returnData;
      that.flightData2 =returnData;

      console.log(returnData)     
    })
  }
  onClickCity(e,item){
    debugger
    if(e.checked && item.Name=="İstanbul")
    {
      this.flightData = this.flightData.filter(x=>x.from!="IST")
    }
    else 

    that.flightData =JSON.parse(JSON.stringify(that.flightData2));
  }
}
 