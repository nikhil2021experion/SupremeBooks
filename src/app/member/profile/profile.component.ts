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
    
  }


  


  //logout
  logOut(){
    this.authService.logout();
    this.router.navigateByUrl('login');
  }
}
