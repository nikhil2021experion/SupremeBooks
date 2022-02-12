import { Component, OnInit } from '@angular/core';
import { LibraryService } from 'src/app/shared/library.service';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  page:number =1;
  filter: string;
  constructor(public  libraryService: LibraryService, private authService: AuthService , private router: Router) { }

  ngOnInit(): void {

    this.libraryService.bindListBooksDetails();
  }

}
