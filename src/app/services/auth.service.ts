import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


export class User {
  email: String;
  password: String;
  authToken: String;

  constructor () { }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiBaseUrl: String = 'http://localhost:8080/api'

  private userSource = new BehaviorSubject(new User);
  currentUser = this.userSource.asObservable();

  constructor(private http: HttpClient) { }

  register(user) {
    let url = `${this.apiBaseUrl}/register`;
    return this.http.post(url, user);
  };

  changeUser(user: User) {
    this.userSource.next(user);
  }
}
