import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GetService } from 'src/app/services/request/get.service';
import { SaveService } from 'src/app/services/request/save.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-entretiens',
  templateUrl: './entretiens.component.html',
  styleUrls: ['./entretiens.component.css']
})
export class EntretiensComponent {


    constructor(private getService : GetService, private saveService : SaveService) { }

    ngOnInit(): void {
      this.getEntretiens();
    }
   @Input() isOpen: boolean = false;
      closeModal() {
      this.isOpen = false;
    }
    openModal() {
      this.isOpen = true;
    }
    formGroupEntretien: FormGroup = new FormGroup({
    date: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    entreprise: new FormControl('', [Validators.required]),
  });
    // saveEntretien
    saveEntretien(formGroupEntretien : FormGroup){
      this.saveService.saveEntretien(formGroupEntretien.value).subscribe(
        (res) => {
          if(res.status == 200){
            this.getEntretiens();
            this.formGroupEntretien = new FormGroup({
              date: new FormControl('', [Validators.required]),
              title: new FormControl('', [Validators.required]),
              description: new FormControl('', [Validators.required]),
              entreprise: new FormControl('', [Validators.required]),
            });
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Entretien ajouté avec succès',
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
