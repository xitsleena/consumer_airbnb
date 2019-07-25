import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public currentUser: User;

  constructor() { }

  login(email: string, password: string): User {
    let user = this.getAllUsers().filter(user => user.email == email)[0];
    if((user) && (user.password == password)) {
      this.currentUser = user;
      return user;
    }
    return null;
  }

  getAllUsers(): User[] {
    return [
      new User(
        'leena',
        'zeng',
        'alinazeng@ucsb.edu',
        'pancakes'
      ),
      new User(
        'baleena',
        'badoink',
        'badoink@gmail.com',
        'waffles'
      )
    ]
  }


  getUser(){
    return this.currentUser; 
  }

  setUser(user: User){
    this.currentUser = user;
  }
}
