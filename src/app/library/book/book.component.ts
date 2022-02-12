import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/auth.service';
import { LibraryService } from 'src/app/shared/library.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  loggedUser: string;

  //declare variable bID
  bID:number;
  constructor(public libraryService : LibraryService, private authService: AuthService , 
    private route: ActivatedRoute,private router:Router,
    private toasterService: ToastrService) { }

  ngOnInit(): void {

    this.loggedUser = localStorage.getItem("USERNAME");

    this.libraryService.bindListAuthors();
    this.libraryService.bindListGenres();
    this.libraryService.bindListPublications();

    //get bID from ActivateRoute
    this.bID = this.route.snapshot.params['bID'];

    //get book by id
    if(this.bID != 0 || this.bID != null){
      console.log(this.bID);

      //call method
      this.libraryService.getBook(this.bID).subscribe(
        response =>{
          console.log(response);
          this.libraryService.formData = Object.assign({},response);
        },
        error =>{
          console.log(error);
        }
      )
    }
  }

  
  //Submit
  onSubmit(form:NgForm){
    console.log(form.value);

    let addId = this.libraryService.formData.BookId;
    // INSERT OR UPDATE
    if(addId == 0 || addId == null){
      //INSERT
      this.insertBookRecord(form);
    }
    else{
      //UPDATE
      this.updateBookRecord(form);
    }
  }

  //insert Method
  insertBookRecord(form?: NgForm){
    console.log("Inserting a record...");
    this.libraryService.insertBook(form.value).subscribe(
      (result) => {
        console.log(result);
        this.resetForm(form);

        this.toasterService.success('book record has been inserted','BookRentalApp v2022');
      },
      (error)=>{
        console.log(error);
      }
    );
  }


  //update Method
  updateBookRecord(form?: NgForm){
    console.log("updating a record...");
    this.libraryService.updateBook(form.value).subscribe(
      (result) => {
        console.log(result);
        //call reset form for clear the content
        this.resetForm(form);

        this.toasterService.success('book record has been updated','BookRentalApp v2022');
      },
      (error)=>{
        console.log(error);
      }
    );
  }


  //clear all contents after submit --initialization
  resetForm(form?: NgForm){
    if(form != null ) {
      form.resetForm();
    }
  }

  //logout
  logOut(){
    this.authService.logout();
    this.router.navigateByUrl('login');
  }





}
