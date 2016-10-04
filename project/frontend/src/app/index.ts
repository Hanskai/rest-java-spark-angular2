import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AuthModalComponent } from './modals/auth-modal/auth-modal.component';
import { ConfirmModalComponent } from './modals/confirm-modal/confirm-modal.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AccessFrameComponent } from './pages/admin-page/access-frame/access-frame.component';
import { UsersFrameComponent } from './pages/admin-page/users-frame/users-frame.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

export { AppComponent } from './app.component';
export { NavbarComponent } from './navbar/navbar.component';
export { HomePageComponent } from './pages/home-page/home-page.component';
export { AuthModalComponent } from './modals/auth-modal/auth-modal.component';
export { ConfirmModalComponent } from './modals/confirm-modal/confirm-modal.component';
export { AdminPageComponent } from './pages/admin-page/admin-page.component';
export { AccessFrameComponent } from './pages/admin-page/access-frame/access-frame.component';
export { UsersFrameComponent } from './pages/admin-page/users-frame/users-frame.component';
export { ProfilePageComponent } from './pages/profile-page/profile-page.component';

export default [
    AppComponent, NavbarComponent, 
    HomePageComponent, AdminPageComponent, 
    ProfilePageComponent,
    UsersFrameComponent, AccessFrameComponent,
    AuthModalComponent, ConfirmModalComponent
]