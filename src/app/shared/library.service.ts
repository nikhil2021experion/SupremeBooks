import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Listofbook } from './listofbook';
import { Memberwithfine } from './memberwithfine';
import { Author } from './author';
import { Genre } from './genre';
import { Publication } from './publication';
import { Observable } from 'rxjs';
import { Book } from './book';
import { Rent } from './rent';
import { Member } from './member';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  lists:Listofbook[];
  fine:Memberwithfine[];
  authors:Author[];
  genres:Genre[];
  publications:Publication[];
  books:Book[];
  members:Member[];
  rents:Rent[];
  formDataTwo: Member = new Member();
  formDataOne: Rent = new Rent();
  formData: Book = new Book();     //one book details in to formData
  constructor(private httpClient: HttpClient) { }


  //get all publications
  bindListPublications(){
    this.httpClient.get(environment.apiUrl+ '/api/Publications').toPromise().then(
      response =>{
        console.log(" from service  for publication");
        console.log(response);
        this.publications = response as Publication[]
      }
    )
  }


  //get all authors
  bindListAuthors(){
    this.httpClient.get(environment.apiUrl+ '/api/Authors').toPromise().then(
      response =>{
        console.log(" from service  for author");
        console.log(response);
        this.authors = response as Author[]
      }
    )
  }


  //get all genres
  bindListGenres(){
    this.httpClient.get(environment.apiUrl+ '/api/Genres').toPromise().then(
      response =>{
        console.log(" from service  for genre");
        console.log(response);
        this.genres = response as Genre[]
      }
    )
  }

  bindListBooksDetails(){
    this.httpClient.get(environment.apiUrl+ '/api/ListOfBooks').toPromise().then(
      response =>{
        console.log(" from service for list of all books ");
        console.log(response);
        this.lists = response as Listofbook[]
      }
    )
  }

  //get all members
  bindListMembers(){
    this.httpClient.get(environment.apiUrl+ '/api/Members/GetMembers').toPromise().then(
      response =>{
        console.log(" from service  for member");
        console.log(response);
        this.members = response as Member[]
      }
    )
  }


  bindListMembersWithFine(){
    this.httpClient.get(environment.apiUrl+ '/api/Members/GetAllMembersWithFine').toPromise().then(
      response =>{
        console.log(" from service for members with fine ");
        console.log(response);
        this.fine = response as Memberwithfine[]
      }
    )
  }









  //get book by id
  getBook(id:number): Observable<any>{
    console.log(id);
    return this.httpClient.get(environment.apiUrl+ "/api/Books/GetBooksById/"+id);
  }

  //insert book
  insertBook(books:Book): Observable<any>{
    console.log(" book id: " +books.BookId);
    console.log(" book name: " +books.BookName);
    console.log(" price: " +books.Price);
    return this.httpClient.post(environment.apiUrl+ "/api/Books",books);
  }

  //update book
  updateBook(books:Book): Observable<any>{
    return this.httpClient.put(environment.apiUrl+ "/api/Books",books);
  }

  
  //delete Book
  deleteBook(id:number){
    return this.httpClient.delete(environment.apiUrl+ "/api/Books/"+id);
  }



  //get rent by id
  // getRent(id:number): Observable<any>{
  //   return this.httpClient.get(environment.apiUrl+ "/api/ListOfBooks/GetRentById/"+id);
  // }

  //insert rent
  insertRent(rents: Rent): Observable<any>{
    console.log(" book id: " +rents.BookId);
    console.log(" member id: " +rents.MemberId);
    console.log(" rent id: " +rents.RentId);
    return this.httpClient.post(environment.apiUrl+ "/api/Rent",rents);
  }

  //update rent
  updateRent(rents: Rent): Observable<any>{
    return this.httpClient.put(environment.apiUrl+ "/api/Rent",rents);
  }


   //get member by id
   getMember(id:number): Observable<any>{
    console.log(id);
    return this.httpClient.get(environment.apiUrl+ "/api/Members/GetMemberById/"+id);
  }
}

