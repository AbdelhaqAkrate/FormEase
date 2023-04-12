import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateResponse } from 'src/app/models/create-response';
import { EntretienResponse } from 'src/app/models/entretien-response';
import { RoleResponse } from 'src/app/models/role-response';
import { UserResponse } from 'src/app/models/user-response';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(private http : HttpClient) { }

  getUsers(){
    return this.http.get<UserResponse>("http://localhost:8080/api/users");
  }
  getRoles(){
    return this.http.get<RoleResponse>("http://localhost:8080/api/roles");
  }
  getAccounts(){
    return this.http.get<UserResponse>("http://localhost:8080/api/accounts");
  }
  getEntretiens(){
    return this.http.get<EntretienResponse>("http://localhost:8080/api/entretiens");
  }
  getEntretiensById(id : any){
    return this.http.get<EntretienResponse>("http://localhost:8080/api/entretiens/"+id);
  }
  getDemandesById(id : any){
    return this.http.get<EntretienResponse>("http://localhost:8080/api/entretiens/demande/"+id);
  }


  //Delete RequestS
  deleteUser(id : any){
    return this.http.get<CreateResponse>("http://localhost:8080/admin/deleteUser/"+id);
  }
  deleteAccount(id : any){
    return this.http.get<CreateResponse>("http://localhost:8080/admin/deleteAccount/"+id);
  }
  //new account
  newAccount(id : any){
    return this.http.get<CreateResponse>("http://localhost:8080/admin/newAccount/"+id);
  }

}
