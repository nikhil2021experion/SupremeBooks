import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //declare variables
  loginForm!: FormGroup;
  isSubmitted = false;
  error = '';
  loginUser:any ;
  constructor(private formBuilder: FormBuilder, private router: Router , private authService: AuthService) { }

  ngOnInit(): void {


    //create a reactive form model
    this.loginForm = this.formBuilder.group(
      {
        //formcontrolname fields
        MemberName: ['',[Validators.required]],
        Password: ['',[Validators.required]]
      }
    );
    
  }

  //get controls for validation
  get formControls(){
    return this.loginForm.controls;
  }

  
  //login verify for credentials
  loginCredentials(){
    this.isSubmitted = true;
    console.log("Submitted form for credentials");
    if(this.loginForm.invalid){
      console.log("submitted with INVALID");
      
    }
    if(this.loginForm.valid){
      console.log("submitted with Credentials");
      //calling method from authservice --authentication and authorize
      this.authService.loginVerfy(this.loginForm.value).subscribe(
        responseData =>{
          console.log(responseData);
          this.loginUser = responseData;
          //console.log(responseData[0]);
          console.log(this.loginUser.RoleId);
          

          //first step for jwt interceptor
          //UserName, Roleid, Token
          sessionStorage.setItem("JwtTOKEN", this.loginUser.Token)
          
          //check the role based on roleId ,it redirects to the respective component
          if(this.loginUser.RoleId === 1){
            console.log("ADMINISTRATOR");
            
            localStorage.setItem("USERNAME",this.loginUser.MemberName);
            localStorage.setItem("ACCESSIBLE", this.loginUser.RoleId.toString());
            localStorage.setItem("CURRENTUSER",this.loginUser.MemberId.toString());
            sessionStorage.setItem("JwtTOKEN",this.loginUser.Token);
            this.router.navigateByUrl('/admin');
          }
          else if(this.loginUser.RoleId === 2){
            console.log(" Welcome tho Library my firend");

            localStorage.setItem("USERNAME",this.loginUser.MemberName);
            localStorage.setItem("ACCESSIBLE", this.loginUser.RoleId.toString());
            localStorage.setItem("CURRENTUSER",this.loginUser.MemberId.toString());
            sessionStorage.setItem("JwtTOKEN",this.loginUser.Token);
            this.router.navigateByUrl('/member');
          }
          else if(this.loginUser.RoleId === 3){
            console.log("COORDINATOR");

            localStorage.setItem("USERNAME",this.loginUser.MemberName);
            localStorage.setItem("ACCESSIBLE", this.loginUser.RoleId.toString());
            localStorage.setItem("CURRENTUSER",this.loginUser.MemberId.toString());
            sessionStorage.setItem("JwtTOKEN",this.loginUser.Token);
            this.router.navigateByUrl('/coordinator');
          }
          else{
            this.error="sorry! not authenticate to access this module"
          }
        },
        error=>{
          this.error="Invalid username or password.Try again..."
        }
      );
    }
  }

}
