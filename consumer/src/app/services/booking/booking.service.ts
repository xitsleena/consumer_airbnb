import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Property } from './../../models/property.model';


@Injectable({
  providedIn: 'root'
})
export class BookingService {
  properties: Property[]= [];
  title: string; 
  location: string;
  description: string; 
  numberOfPeople: number; 
  pricerPerNight: number;
  imgUrl: string; 
  hostId: string; 

  constructor(private http:HttpClient) { }

  showBookings(): Property[] {
    debugger;
    this.http.get('http://localhost:5000/api/bookings/'+this.hostId).subscribe((response) => {
      debugger;
      for (let listing of Object.values(response)){
        debugger;
        let newListing = new Property(listing.id,listing.title, listing.location, listing.pricePerNight, listing.numberOfPeople, 
          listing.description, listing.imgUrl, listing.hostId);
          debugger;
        this.properties.push(newListing); 
      }
    });
    return this.properties;
  }

  getBooking(userId: number): Property {
    return this.showBookings().filter(property => property.hostId == userId)[0];
  }

 
 

   
}
