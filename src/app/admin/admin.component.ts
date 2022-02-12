import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { LibraryService } from '../shared/library.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  page:number =1;
  filter: string;
  loggedUser: string;
  bID:number;
  constructor(private authService: AuthService , private router: Router,public  libraryService: LibraryService) { }

  ngOnInit(): void {


    this.loggedUser = localStorage.getItem("USERNAME");
    this.libraryService.bindListBooksDetails();
    console.log("im in admin page");

  }

  //Edit book
  updateBook(bID:number){
    console.log(" going to update this " +bID);
    //navigate to edit form with selected book details

    this.router.navigate(['book',bID]);
  }

  //logout
  logOut(){
    this.authService.logout();
    this.router.navigateByUrl('login');
  }
}
