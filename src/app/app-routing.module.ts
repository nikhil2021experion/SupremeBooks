import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ReportComponent } from './admin/report/report.component';
import { ViewMemberComponent } from './admin/view-member/view-member.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './library/book/book.component';
import { LibraryComponent } from './library/library.component';
import { LoginComponent } from './login/login.component';
import { MemberComponent } from './member/member.component';
import { ProfileComponent } from './member/profile/profile.component';
import { RentBookComponent } from './member/rent-book/rent-book.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: '', component:LoginComponent},
  {path: 'login', component:LoginComponent},
  {path: 'admin', component:AdminComponent, canActivate: [AuthGuard],data: { role: '1'}},
  {path: 'reports', component:ReportComponent},
  {path: 'library', component:LibraryComponent},
  {path: 'member', component:MemberComponent, canActivate: [AuthGuard],data: { role: '2'}},
  {path: 'book', component:BookComponent},
  {path: 'rent/:bID', component:RentBookComponent},
  {path: 'book/:bID', component:BookComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'view-member', component:ViewMemberComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
