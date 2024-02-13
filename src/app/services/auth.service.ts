import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserResponse } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_URL: string = environment.baseUrl

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post(`${this.BASE_URL}/users/login`, {email, password})
  }
}
