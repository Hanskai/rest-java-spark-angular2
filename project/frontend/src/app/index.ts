import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AuthModalComponent } from './modals/auth-modal/auth-modal.component';
import { ConfirmModalComponent } from './modals/confirm-modal/confirm-modal.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AccessFrameComponent } from './pages/admin-page/access-frame/access-frame.component';
import { UsersFrameComponent } from './pages/admin-page/users-frame/users-frame.component';
import { ErrorFrameComponent } from './frames/error-frame/error-frame.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { ProfileFrameComponent } from './pages/account-page/profile-frame/profile-frame.component';
import { ConfigFrameComponent } from './pages/admin-page/config-frame/config-frame.component';
import { AuditFrameComponent } from './pages/admin-page/audit-frame/audit-frame.component';
import { UsersTableComponent } from './pages/admin-page/users-frame/users-table/users-table.component';

export { AppComponent } from './app.component';

export default [
    AppComponent, NavbarComponent,  ErrorFrameComponent,
    HomePageComponent, 
    AccountPageComponent, ProfileFrameComponent,
    AdminPageComponent, UsersFrameComponent, AccessFrameComponent, ConfigFrameComponent, AuditFrameComponent, UsersTableComponent,
    AuthModalComponent, ConfirmModalComponent
]