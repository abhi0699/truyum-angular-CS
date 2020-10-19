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

  }

  generateUserList(): void {
    let user: User = new User();
    user.userName = 'abhi0699';
    user.firstName = 'Abhishek';
    user.lastName = 'Divecha';
    user.password = 'divecha10';
    user.admin = true;
    this.userList.push(user);

    user = new User();
    user.userName = 'dash2709';
    user.firstName = 'Kushagra';
    user.lastName = 'Dash';
    user.password = 'kush27';
    user.admin = false;
    this.userList.push(user);

    user = new User();
    user.userName = 'login';
    user.firstName = 'Guest';
    user.lastName = '1';
    user.password = 'password1';
    user.admin = false;
    this.userList.push(user);

    user = new User();
    user.userName = 'login';
    user.firstName = 'Guest';
    user.lastName = '2';
    user.password = 'password';
    user.admin = false;
    this.userList.push(user);
  }

  addUser(user: User): void {
    this.userList.push(user);
  }

  getUser(userName: string): User {
    let user: User = new User();
    this.userList.forEach(x => {
      if (x.userName == userName)
        user = x;
    });
    return user;
  }
}
