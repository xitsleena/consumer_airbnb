import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { UserService } from '../../services/user/user.service';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '../../models/http-response';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: string; 
  password: string;
  name: string;

  password_type: string = 'password';



  
  togglePasswordMode() {   
   this.password_type = this.password_type === 'text' ? 'password' : 'text';
  }

  constructor(private navCtrl: NavController, 
              private userService: UserService,
              public toastCtrl: ToastController,
              private http:HttpClient) {}

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
    if (this.email && this.password) {
      this.http.post('http://localhost:5000/api/auth/login', {email: this.email, password: this.password}).subscribe((response:HttpResponse) => {
        if (response.success){
          this.presentSuccessToast(this.email);
          this.navToListings();
        }
        else{
          this.presentErrorToast();
        }
      });
    } 
    
  }
}
