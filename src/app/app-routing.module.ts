import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMasterComponent } from './Admin/admin-master/admin-master.component';
import { DiscountListComponent } from './Admin/discount-list/discount-list.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserMasterComponent } from './User/user-master/user-master.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: UserLoginComponent
  // },
  {
    path: 'Admin',
    component: AdminMasterComponent
  },
  // {
  //   path: 'Admin/Discount',
  //   component: DiscountListComponent
  // },
  {
    path: 'User',
    component: UserMasterComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
