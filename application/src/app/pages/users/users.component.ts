import { Component, Input } from '@angular/core';
import { SaveService } from '../../../app/services/request/save.service';
import { GetService } from '../../../app/services/request/get.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

    constructor(private saveService : SaveService, private getService: GetService) { }

    formGroupUser: FormGroup = new FormGroup({
    role: new FormControl('', [Validators.required]),
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    year: new FormControl('', [Validators.required]),
  });


     searchText : string = "";
      @Input() isOpen: boolean = false;
      closeModal() {
      this.isOpen = false;
    }
    openModal() {
      this.isOpen = true;
    }

    ngOnInit(): void {
      this.getUsers();
      this.getRoles();
    }

    users : any = [{}];
    roles : any = [{}];
    saveUser(formGroupUser : FormGroup){
      this.saveService.saveUser(formGroupUser.value).subscribe(
        (res) => {
          if(res.status == 200){
            this.getUsers();
            this.closeModal();
            //initilize form
            this.formGroupUser = new FormGroup({
              role: new FormControl('', [Validators.required]),
              fullName: new FormControl('', [Validators.required]),
              email: new FormControl('', [Validators.required]),
              password: new FormControl('', [Validators.required]),
              phone: new FormControl('', [Validators.required]),
              year: new FormControl('', [Validators.required]),
            });
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
    deleteUser(id : any){
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.getService.deleteUser(id).subscribe(
            (res) => {
              this.getUsers();
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: res.message,
                showConfirmButton: false,
                timer: 1500
              })
            }
          )
        }
      }
      )
    }
    newAccount(id : any){
      this.getService.newAccount(id).subscribe(
        (res) => {
          this.getUsers();
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: res.message,
            showConfirmButton: false,
            timer: 1500
          })
        }
      )
    }
}
