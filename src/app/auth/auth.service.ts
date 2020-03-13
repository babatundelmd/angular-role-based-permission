import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Login } from 'app/models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  get isLoggedIn () {
    return this.loggedIn.asObservable()
  }

  constructor (private router: Router) { }

  getUserType() {
    return localStorage.getItem('role')
  }

  get isUserRole() {
    return true;
  }

  isSuperAdmin() {
    if (localStorage.getItem('role') === "superAdmin") {
      return true;
    } else {
      return false;
    }
  }

  login (user: Login) {
    if (user.user != '' && user.roles != '') {
      this.loggedIn.next(true);
      this.router.navigate([ '/dashboard' ])
    }
  }

  logOut () {
    this.loggedIn.next(false);
    this.router.navigate([ '/' ])
  }

}
