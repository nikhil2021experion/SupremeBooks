import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { LibraryComponent } from './library/library.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ReportComponent } from './admin/report/report.component';
import { HomeComponent } from './home/home.component';
import { MemberComponent } from './member/member.component';
import { AuthService } from './shared/auth.service';
import { LibraryService } from './shared/library.service';
import { RentBookComponent } from './member/rent-book/rent-book.component';
import { BookComponent } from './library/book/book.component';
import { ProfileComponent } from './member/profile/profile.component';
import { ViewMemberComponent } from './admin/view-member/view-member.component';

@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    LoginComponent,
    AdminComponent,
    ReportComponent,
    HomeComponent,
    MemberComponent,
    RentBookComponent,
    BookComponent,
    ProfileComponent,
    ViewMemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [AuthService,LibraryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
