import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { LibraryService } from '../shared/library.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  page:number =1;
  filter: string;
  loggedUser: string;
  bID:number;
  mID:number;
  constructor(public  libraryService: LibraryService, private authService: AuthService , private router: Router) { }

  ngOnInit(): void {

    this.loggedUser = localStorage.getItem("USERNAME");
    this.libraryService.bindListBooksDetails();
    this.libraryService.bindListMembers();
    console.log("im in user page");

    
  }


  //Edit Post
  addRent(bID:number){
    console.log(" going to add this to rent details " +bID);
    //navigate to edit form with selected post details
    this.router.navigate(['rent',bID]);
  }

   //Edit Post
   gotoProfile(mID:number){
    console.log(" going to add this to profile "+mID );
    //navigate to edit form with selected post details
    this.router.navigate(['profile',mID]);
  }

  //logout
  logOut(){
    this.authService.logout();
    this.router.navigateByUrl('login');
  }
}
