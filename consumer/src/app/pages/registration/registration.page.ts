import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '../../models/http-response';
import { UserService } from '../../services/user/user.service';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  name: string; 
  surname: string =""; 
  email: string;
  password: string; 
  cpassword: string; 
  role: string = "role";

  constructor(private navCtrl: NavController,
              public toastCtrl: ToastController,
              private http:HttpClient,
              private userService: UserService) { }

  ngOnInit() {
  }

  navToListings(){
    this.navCtrl.navigateForward("list-of-properties");
  }

  async presentErrorToast(message?: string) {
    const toast = await this.toastCtrl.create({
      message: message,
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

  register(){
    if (this.name && this.surname && this.email && 
        this.password && this.cpassword && 
        this.password==this.cpassword){
          this.http.post('http://localhost:5000/api/auth/registration', {name: this.name, surname: this.surname, 
          email: this.email, password: this.password, role: "user"}).subscribe((response) => {
        if (response){
          this.presentSuccessToast(this.email);
          this.userService.setUser(response[0]);
          this.navToListings();
        }
        else{
          this.presentErrorToast("User already exists!");
        }
      });
    }
    else {
      this.presentErrorToast("Please check all fields!");
    }
  }



}
