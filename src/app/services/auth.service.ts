import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { LoginResponse } from '../types/login-response.type';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:8080/users';

 constructor(private httpClient: HttpClient) { }
     login(email: string, password: string) {
       return this.httpClient.post<LoginResponse>(this.baseUrl + "/login", { email, password }).pipe(
         tap((value) => {
           sessionStorage.setItem("auth-token", value.token);
         })
       )
     }

     singup(email: string, password: string, name : string, photo: string) {
       return this.httpClient.post<LoginResponse>(this.baseUrl + "/register", { email, name, photo, password }).pipe(
         tap((value) => {
           sessionStorage.setItem("auth-token", value.token);
         })
       )
     }
   }
   
