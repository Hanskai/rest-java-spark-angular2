import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { UsersFrameComponent } from './pages/admin-page/users-frame/users-frame.component';
import { AccessFrameComponent } from './pages/admin-page/access-frame/access-frame.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'admin', component: AdminPageComponent, children: [
      { path: '', component: UsersFrameComponent },
      { path: 'access', component: AccessFrameComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class FrontendRoutingModule { }