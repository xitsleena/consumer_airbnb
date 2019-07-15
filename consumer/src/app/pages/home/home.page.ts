import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: string; 
  password: string;

  password_type: string = 'password';
  
  togglePasswordMode() {   
   this.password_type = this.password_type === 'text' ? 'password' : 'text';
  }

  constructor(private navCtrl: NavController, 
              private userService: UserService,
              public toastCtrl: ToastController) {}

  ngOnInit() {
  }

  navToListings(){
      this.navCtrl.navigateForward("list-of-properties");
  }

  navToRegistration(){
    this.navCtrl.navigateForward("registration");
  }

  async presentErrorToast() {
    const toast = await this.toastCtrl.create({
      message: 'Incorrect username or password!',
      duration: 2000,
      position: 'top',
      color: 'danger'
    });
    toast.present();
  }

  async presentSuccessToast(name?: string) {
    const toast = await this.toastCtrl.create({
      message: 'Welcome, ' + name + '!',
      duration: 2000,
      position: 'top',
      color: 'success'
    });
    toast.present();
  }

  login() {
    const user = this.userService.login(this.email, this.password);
    if (user) {
      this.presentSuccessToast(user.firstName);
      this.navToListings();
    } 
    else {
      this.presentErrorToast();
    }
  }
}
