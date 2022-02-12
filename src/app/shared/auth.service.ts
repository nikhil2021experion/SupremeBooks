import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from './member';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  public loginVerfy(members: Member){
    //calling  webservice and passing username and password
    console.log(members);
    //return this.httpClient.get(environment.roleUrl +'/api/users/GetUser/'+ user.userName + '&'+user.userPassword);
    return this.httpClient.get('https://localhost:44357/api/Members/EnterCredentials='+members.MemberName+'&'+members.Password);    
  }

  public logout(){
    localStorage.removeItem("USERNAME");
    localStorage.removeItem("ACCESSIBLE");
    sessionStorage.removeItem("USERNAME");
    sessionStorage.removeItem("JwtTOKEN");
}
}
