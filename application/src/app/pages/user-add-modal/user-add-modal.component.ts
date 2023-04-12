import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { SaveService } from '../../../app/services/request/save.service';
import { GetService } from '../../../app/services/request/get.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-add-modal',
  templateUrl: './user-add-modal.component.html',
  styleUrls: ['./user-add-modal.component.css']
})
export class UserAddModalComponent {

    constructor(private saveService : SaveService, private getService: GetService) { }
    ngOnInit(): void {
      this.getRoles();
    }

    @Input() isOpen: boolean = false;
    closeModal() {
    this.isOpen = false;
  }
  openModal() {
    this.isOpen = true;
  }

    formGroupUser: FormGroup = new FormGroup({
    role: new FormControl('', [Validators.required]),
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    year: new FormControl('', [Validators.required]),
  });

    saveUser(formGroupUser : FormGroup){
      this.saveService.saveUser(formGroupUser.value).subscribe(
        (res) => {
          if(res.status == 200){
            this.getUsers();
            this.closeModal();
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: res.message,
              showConfirmButton: false,
              timer: 1500
            })
          }

        }
      )
    }
    users : any = [{}];
    roles : any = [{}];
    getRoles(){
      this.getService.getRoles().subscribe(
        (res) => {
          this.roles = res;
          console.log(res);
        }
      )
    }
    getUsers(){
      this.getService.getUsers().subscribe(
        (res) => {
          this.users = res;
          console.log(res);
        }
      )
    }



}
