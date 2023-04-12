import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuardGuard implements CanActivate {
 constructor(private router: Router) {}

  canActivate(): boolean {
    if(localStorage.getItem('token') && (localStorage.getItem('role') == 'ADMIN' || localStorage.getItem('role') == 'USER')){
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }

}
