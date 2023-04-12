import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateResponse } from 'src/app/models/create-response';
@Injectable({
  providedIn: 'root'
})
export class SaveService {

  constructor(private http : HttpClient ) { }

  saveUser(user : any){
    return this.http.post<CreateResponse>("http://localhost:8080/admin/createUser",user);
  }
  saveEntretien(entretien : any){
    return this.http.post<CreateResponse>("http://localhost:8080/admin/createEntretien",entretien);
  }
  saveDemande(demande : any){
    return this.http.post<CreateResponse>("http://localhost:8080/api/entretiens/demande",demande);
  }
}
