import { Component, OnInit } from '@angular/core';
import { BookingService } from './../../services/booking/booking.service';
import { Booking } from './../../models/booking.model';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '../../models/http-response';
import { Property } from './../../models/property.model';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  bookings: Property[]=[];
  booking: Property; 
  properties: Property[] = [];
  property: Property;
  userId: number; 
  listingId: number; 
  status: string; 
  dateStart: string; 
  dateEnd: string; 

  title: string; 
  location: string;
  description: string; 
  numberOfPeople: number; 
  imgUrl: string; 
  hostId: string;

  constructor( private route: ActivatedRoute,
    public bookingService: BookingService) { }

  ngOnInit() {
    //this.booking = this.bookingService.getBooking(1);
  }

}
