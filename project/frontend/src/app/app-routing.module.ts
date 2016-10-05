import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { UsersFrameComponent } from './pages/admin-page/users-frame/users-frame.component';
import { AccessFrameComponent } from './pages/admin-page/access-frame/access-frame.component';
import { ConfigFrameComponent } from './pages/admin-page/config-frame/config-frame.component';
import { AuditFrameComponent } from './pages/admin-page/audit-frame/audit-frame.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { ProfileFrameComponent } from './pages/account-page/profile-frame/profile-frame.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'admin', component: AdminPageComponent, children: [
      { path: '', component: UsersFrameComponent },
      { path: 'users', component: UsersFrameComponent },
      { path: 'access', component: AccessFrameComponent },
      { path: 'config', component: ConfigFrameComponent },
      { path: 'audit', component: AuditFrameComponent }
    ]
  },
  {
    path: 'account', component: AccountPageComponent, children: [
      { path: '', component: ProfileFrameComponent },
      { path: 'profile', component: ProfileFrameComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class FrontendRoutingModule { }