import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/auth.service';
import { LibraryService } from 'src/app/shared/library.service';

@Component({
  selector: 'app-view-member',
  templateUrl: './view-member.component.html',
  styleUrls: ['./view-member.component.scss']
})
export class ViewMemberComponent implements OnInit {

  loggedUser:string;
  constructor(public  libraryService: LibraryService, private authService: AuthService , 
    private router: Router,
    private route: ActivatedRoute,
    private toasterService: ToastrService) { }

  ngOnInit(): void {

    this.loggedUser = localStorage.getItem("USERNAME");
    this.libraryService.bindListMembers();
  }

  
  //logout
  logOut(){
    this.authService.logout();
    this.router.navigateByUrl('login');
  }

}
