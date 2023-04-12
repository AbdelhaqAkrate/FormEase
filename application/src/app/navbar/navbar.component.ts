import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  role : string = "";
  constructor(private router: Router) {
    this.role = localStorage.getItem('role') || '';
  }
    logout(){
    localStorage.clear();
    this.router.navigate(['/login']);

  }


}
