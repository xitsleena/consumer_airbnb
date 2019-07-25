import { User } from './../../models/user.model';
import { UserService } from './../../services/user/user.service';
import { Property } from './../../models/property.model';
import { PropertyService } from './../../services/property/property.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '../../models/http-response';

@Component({
  selector: 'app-list-of-properties',
  templateUrl: './list-of-properties.page.html',
  styleUrls: ['./list-of-properties.page.scss'],
})
export class ListOfPropertiesPage implements OnInit {
  currentUser: User;
  properties: Property[];
  title: string; 
  location: string;
  description: string; 
  numberOfPeople: number; 
  imgUrl: string; 
  hostId: string; 

  constructor(
    public userService: UserService,
    public propertyService: PropertyService,
    public navCtrl: NavController,
    private http:HttpClient) {

  }



  ngOnInit() {
    this.properties = this.propertyService.showListings();
  }


}
