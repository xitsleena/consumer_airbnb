import { User } from './../../models/user.model';
import { UserService } from './../../services/user/user.service';
import { Property } from './../../models/property.model';
import { PropertyService } from './../../services/property/property.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-of-properties',
  templateUrl: './list-of-properties.page.html',
  styleUrls: ['./list-of-properties.page.scss'],
})
export class ListOfPropertiesPage implements OnInit {
  currentUser: User;
  properties: Property[];
  
  constructor(
    public userService: UserService,
    public propertyService: PropertyService,
    public navCtrl: NavController) {

  }

  ngOnInit() {
    this.currentUser = this.userService.currentUser;
    if (!this.currentUser) {
      this.currentUser = this.userService.getAllUsers()[0];
      this.navCtrl.navigateForward("home");
    }
    this.properties = this.propertyService.getAllProperties();
  }
}
