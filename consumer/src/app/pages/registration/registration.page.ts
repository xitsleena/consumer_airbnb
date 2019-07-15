import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  firstname: string; 
  lastname: string; 
  email: string;
  username: string; 
  password: string; 
  cpassword: string; 

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  navToProperties(){
    if (this.password==this.cpassword){
      this.navCtrl.navigateForward("list-of-properties");
    }
    else{
      console.log("passwords do not match!");
    }
  }

}
