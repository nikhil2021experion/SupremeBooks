import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/auth.service';
import { LibraryService } from 'src/app/shared/library.service';

@Component({
  selector: 'app-rent-book',
  templateUrl: './rent-book.component.html',
  styleUrls: ['./rent-book.component.scss']
})
export class RentBookComponent implements OnInit {

  loggedUser: string;

  //declare variable bID
  bID:number;
  
  constructor(public libraryService : LibraryService, private authService: AuthService , 
    private route: ActivatedRoute,private router:Router,
    private toasterService: ToastrService) { }

  ngOnInit(): void {

    this.loggedUser = localStorage.getItem("USERNAME");

    //this.libraryService.getBook(this.bID);
    
    // this.libraryService.formData.MemberName = this.loggedUser;
    // console.log(this.libraryService.formData.MemberName);
    

    console.log(this.bID);
    
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

    let addId = this.libraryService.formDataOne.RentId;
    // INSERT OR UPDATE
    if(addId == 0 || addId == null){
      //INSERT
      this.insertRentRecord(form);
    }
    
  }


   //insert Method
   insertRentRecord(form?: NgForm){
    console.log("renting a book ...");
    this.libraryService.insertRent(form.value).subscribe(
      (result) => {
        console.log(result);
        this.resetForm(form);

        this.toasterService.success('book  has been issued to you','BookRentalApp v2022');
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
