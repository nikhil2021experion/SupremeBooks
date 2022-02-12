import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { LibraryService } from 'src/app/shared/library.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  page:number =1;
  filter: string;
  pageTwo:number=1;
  filterTwo:string;
  loggedUser: string;
  constructor(public  libraryService: LibraryService, private authService: AuthService , private router: Router) { }

  ngOnInit(): void {
    this.loggedUser = localStorage.getItem("USERNAME");
    console.log("im in report page");
    this.libraryService.bindListBooksDetails();
    this.libraryService.bindListMembersWithFine();

  }

  //logout
  logOut(){
    this.authService.logout();
    this.router.navigateByUrl('login');
  }

}
