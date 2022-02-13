import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
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
  constructor(private authService: AuthService , private router: Router,public  libraryService: LibraryService,
    private toasterService: ToastrService) { }

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

  deleteBook(bID:number){
    console.log("going to delete"+bID);
    if(confirm('are you sure you want to DELETE this book?')){
      this.libraryService.deleteBook(bID).subscribe(
        response =>{
          this.libraryService.bindListBooksDetails();
          this.toasterService.success('book record has been deleted','BookRentalApp v2022');
        },
        error =>{
          console.log(error);
        }
      );
    }
  }

  //logout
  logOut(){
    this.authService.logout();
    this.router.navigateByUrl('login');
  }
}
