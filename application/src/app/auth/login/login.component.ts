import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";
import {AccountService} from "../../services/acount/account.service";
import {LocalStorageService} from "../../services/localstorage/local-storage.service";
import Swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   loginForm!:FormGroup;
  constructor(

    private fb: FormBuilder,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private accountService : AccountService
  ) {
    this.loginForm = this.fb.group({
      email: ["",[Validators.required,Validators.email]],
      password: ["",[Validators.required]]
    });
  }
  login(){
    const values = this.loginForm.value;

    if(values.email && values.password){
      this.authService.login(values.email,values.password).subscribe(
        (res) => {
          console.log(res);
          if(res.role == "ADMIN" && res.token){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Login Success',
              showConfirmButton: false,
              timer: 1500
            })

            this.accountService.changeStatus(true)
            this.localStorageService.set("id",res.id);
            this.localStorageService.set("token",res.token);
            this.localStorageService.set("name",res.name);
            this.localStorageService.set("role",res.role);
            this.router.navigateByUrl('/apprenants');
            console.log(res)
          }else if( res.role == "USER" && res.token != null){
            this.accountService.changeStatus(true)
            this.localStorageService.set("id",res.id);
            this.localStorageService.set("token",res.token);
            this.localStorageService.set("name",res.name);
            this.localStorageService.set("role",res.role);
            this.router.navigateByUrl('/profile');
            console.log(res)
          }
          else{
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Login Failed',
              showConfirmButton: false,
              timer: 1500
            })
            this.router.navigateByUrl('/login');
          }
        }
      )
    }
  }

}
