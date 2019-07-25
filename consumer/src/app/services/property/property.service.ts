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
  newProperty: Property;
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
      for (let listing of Object.values(response)){
        let newListing = new Property(listing.id, listing.title, listing.location, listing.pricePerNight, listing.numberOfPeople, 
          listing.description, listing.imgUrl, listing.hostId);
      this.properties.push(newListing); 
      }
    });
    return this.properties;
  }

  getProperty(id: number): Property {
    console.log(this.properties);
    for (let i=0; i < this.properties.length; i++){
      if (this.properties[i].id == id){
        return this.properties[i];
      }
    }
    return null;
    }
  
}

