import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: Array<User>

  constructor() {
    this.userList = new Array<User>();
    this.generateUserList();
    console.log(this.userList);

  }

  generateUserList(): void {
    let user: User = new User();
    user.userName = 'abhi0699';
    user.firstName = 'Abhishek';
    user.lastName = 'Divecha';
    user.password = 'divecha10';
    user.isAdmin = true;
    this.userList.push(user);

    user = new User();
    user.userName = 'dash20';
    user.firstName = 'Kushagra';
    user.lastName = 'Dash';
    user.password = 'kd2909';
    user.isAdmin = false;
    this.userList.push(user);
  }

  addUser(user: User): void {
    this.userList.push(user);
    console.log(this.userList);
  }

  getUser(userName: string): User {
    let user: User = new User();
    this.userList.forEach(u => {
      if (u.userName == userName)
        user = u;
    });
    return user;
  }
}
