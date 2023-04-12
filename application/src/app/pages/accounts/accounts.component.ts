import { Component } from '@angular/core';
import { SaveService } from '../../../app/services/request/save.service';
import { GetService } from '../../../app/services/request/get.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {

  constructor(private saveService : SaveService, private getService: GetService) { }
    searchText : string = "";



    ngOnInit(): void {
      this.getAccounts();
    }


    accounts : any = [{}];

    getAccounts(){
      this.getService.getAccounts().subscribe(
        (res) => {
          this.accounts = res;
          console.log(res);
        }
      )
    }
    deactivate(id : any){

      Swal.fire({
        title: 'Are you sure? Account will be deactivated',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, deactivate it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.getService.deleteAccount(id).subscribe(
            (res) => {
              this.getAccounts();
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
      this.getAccounts();
    }
}
