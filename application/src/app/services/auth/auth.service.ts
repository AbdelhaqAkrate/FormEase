import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthResponse} from "../../models/auth-response";
const url = "http://localhost:8080";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient,
    private router:Router,

  ) { }
  login(email:string,password : string){
    const headers = new HttpHeaders(
      {
        'Content-Type':'application/json'
      }
    );
    return this.http.post<AuthResponse>(`${url}/auth/login`,{email, password},{headers});
  }
}
