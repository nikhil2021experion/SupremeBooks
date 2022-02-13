import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/auth.service';
import { LibraryService } from 'src/app/shared/library.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  loggedUser:string;
  mID:number;
  constructor(public  libraryService: LibraryService, private authService: AuthService , 
    private router: Router,
    private route: ActivatedRoute,
    private toasterService: ToastrService) { }

  ngOnInit(): void {

    this.loggedUser = localStorage.getItem("USERNAME");
    this.mID  = +localStorage.getItem("CURRENTUSER");


    //this.mID = this.route.snapshot.params['mID'];

    //get book by id
    if(this.mID != 0 || this.mID != null){
      console.log(this.mID);
      
      //call method
      this.libraryService.getMember(this.mID).subscribe(
        response =>{
          console.log(response);
          
          
          

   

          

          this.libraryService.formDataTwo = Object.assign({},response);
          console.log(this.libraryService.formDataTwo);
          
        },
        error =>{
          console.log(error);
        }
      )
    }
    
  }


  


  //logout
  logOut(){
    this.authService.logout();
    this.router.navigateByUrl('login');
  }
}
