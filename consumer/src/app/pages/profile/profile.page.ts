import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from './../../models/user.model';
import { UserService } from './../../services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  email: string; 
  name: string; 
  surname: string; 
  user: User; 

  constructor(private navCtrl: NavController,
              public userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
  }

  navToListings(){
    this.navCtrl.navigateForward("list-of-properties");
  }
}


