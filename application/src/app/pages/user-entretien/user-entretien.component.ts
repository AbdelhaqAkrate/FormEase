import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GetService } from 'src/app/services/request/get.service';
import { SaveService } from 'src/app/services/request/save.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-entretien',
  templateUrl: './user-entretien.component.html',
  styleUrls: ['./user-entretien.component.css']
})
export class UserEntretienComponent {


    constructor(private getService : GetService, private saveService : SaveService) { }

    ngOnInit(): void {
      this.getEntretiens();
    }


    // save demande
    saveDemande(id : number){
      let d = new Date();
      let date = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();

      let demande = {
        "entretienId" : id,
        "accountId" : parseInt(localStorage.getItem('id') || '0'),
        "date" : date
      }
      this.saveService.saveDemande(demande).subscribe(
        (res) => {
          if(res.status == 200){
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


    entretiens : any = [{}];
    getEntretiens(){
      this.getService.getEntretiens().subscribe(
        (res) => {
          this.entretiens = res;
          console.log(res);
        }
      )
    }

}
