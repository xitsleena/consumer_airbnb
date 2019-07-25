import { Injectable } from '@angular/core';
import { ListOfPropertiesPage } from 'src/app/pages/list-of-properties/list-of-properties.page';
import { Property } from './../../models/property.model';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '../../models/http-response';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  properties: Property[]= [];
  title: string; 
  location: string;
  description: string; 
  numberOfPeople: number; 
  pricerPerNight: number;
  imgUrl: string; 
  hostId: string; 
  
  constructor(private http:HttpClient) { }



  showListings(): Property[] {
    this.http.get('http://localhost:5000/api/listings/').subscribe((response) => {
      debugger;
      for (let listing of Object.values(response)){
        debugger;
        let newListing = new Property(listing.title, listing.location, listing.pricePerNight, listing.numberOfPeople, 
          listing.description, listing.imgUrl, listing.hostId);
        debugger;
        this.properties.push(newListing); // not pushing 
      }
    });
    return this.properties;
  }
}

