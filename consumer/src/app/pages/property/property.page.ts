import { Property } from './../../models/property.model';
import { PropertyService } from './../../services/property/property.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { UserService } from './../../services/user/user.service';



@Component({
  selector: 'app-property',
  templateUrl: './property.page.html',
  styleUrls: ['./property.page.scss'],
})

export class PropertyPage implements OnInit {
  property: Property = new Property(1, 'title', 'location', 
    0, 0, 'description', 'imgUrl', 0);
  properties: Property[] = [];
  price: number;
  description: string; 
  dateStart: string;
  dateEnd: string;


  constructor(private route: ActivatedRoute, 
              public propertyService: PropertyService,
              private navCtrl: NavController, 
              public toastCtrl: ToastController,
              private http:HttpClient,
              public userService: UserService) { }

  async presentSuccessToast(name?: string) {
    const toast = await this.toastCtrl.create({
      message: 'Booked!',
      duration: 2000,
      position: 'top',
      color: 'success'
    });
    toast.present();
  }

  ngOnInit() {
    let propertyId: number = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.properties = this.propertyService.showListings();
    this.property = this.propertyService.getProperty(propertyId);
  }

  bookNow(){ 
    let propertyId: number = parseInt(this.route.snapshot.paramMap.get('id'));
    let user = this.userService.getUser();
    this.http.post('http://localhost:5000/api/bookings/add',{userId: user.id, listingId: propertyId, status: "pending", dateStart: this.dateStart, dateEnd: this.dateEnd}).subscribe((response) => {
      console.log(response);
      if (response){
        this.presentSuccessToast();
      }
      else{
        console.log("sad");
      }
    });
  }
}



