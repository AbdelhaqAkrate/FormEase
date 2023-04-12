import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppInterceptor} from "./interceptors/app-interceptor.interceptor";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { UsersComponent } from './pages/users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { UserAddModalComponent } from './pages/user-add-modal/user-add-modal.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { EntretiensComponent } from './pages/entretiens/entretiens.component';
import { UserEntretienComponent } from './pages/user-entretien/user-entretien.component';
import { EntretienDemandeComponent } from './pages/entretien-demande/entretien-demande.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ProfileComponent,
    LandingPageComponent,
    UsersComponent,
    FilterPipe,
    UserAddModalComponent,
    AccountsComponent,
    EntretiensComponent,
    UserEntretienComponent,
    EntretienDemandeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
