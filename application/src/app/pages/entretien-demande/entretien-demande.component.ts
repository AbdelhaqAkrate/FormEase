import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { single } from 'rxjs';
import { GetService } from 'src/app/services/request/get.service';
import { SaveService } from 'src/app/services/request/save.service';

@Component({
  selector: 'app-entretien-demande',
  templateUrl: './entretien-demande.component.html',
  styleUrls: ['./entretien-demande.component.css']
})
export class EntretienDemandeComponent {
  ids: string = '';
    constructor(private getService : GetService, private saveService : SaveService, private route: ActivatedRoute) {
     this.route.params.subscribe(params => {
        this.ids = params['id'];
     }
      )
    }


    ngOnInit(): void {
      this.getEntretienDemendesById();

    }
    demands : any = [{}];
    entretiens : any = {};
    getEntretienById(){
      this.getService.getEntretiensById(this.ids).subscribe(
        (res) => {
          this.entretiens = res;
        }
      )
    }
    getEntretienDemendesById(){
      this.getService.getDemandesById(this.ids).subscribe(
        (res) => {
          this.demands = res;
        }
      )


    }
}
