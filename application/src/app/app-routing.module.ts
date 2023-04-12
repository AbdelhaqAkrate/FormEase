import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { UsersComponent } from './pages/users/users.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { EntretiensComponent } from './pages/entretiens/entretiens.component';
import { AdminGuardGuard } from './guards/admin-guard.guard';
import { UserGuardGuard } from './guards/user-guard.guard';
import { UserEntretienComponent } from './pages/user-entretien/user-entretien.component';
import { EntretienDemandeComponent } from './pages/entretien-demande/entretien-demande.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'reigster', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'home', component: LandingPageComponent, canActivate: [UserGuardGuard]},
  { path: 'apprenants', component: UsersComponent, canActivate: [AdminGuardGuard]},
  { path: 'accounts', component: AccountsComponent, canActivate: [UserGuardGuard]},
  {path : 'apprenants/entretiens', component: UserEntretienComponent, canActivate: [UserGuardGuard]},
  { path: 'entretiens', component: EntretiensComponent, canActivate: [AdminGuardGuard]},
  {path : 'entretien/:id', component: EntretienDemandeComponent, canActivate: [UserGuardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
