import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CuentosComponent } from './pages/cuentos/cuentos.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ErrorsComponent } from './pages/errors/errors.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ScuentoComponent } from './pages/scuento/scuento.component';
import { AuthGuard } from './shared/guards/auth/auth.guard';
import { UnauthGuard } from './shared/guards/unauth/unauth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent,canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent,canActivate: [UnauthGuard]},
  {path: 'signup', component: SignupComponent,canActivate: [UnauthGuard]},
  {path: 'cuentos', component: CuentosComponent,canActivate: [AuthGuard]},
  {path: 'scuento/:id', component: ScuentoComponent,canActivate: [AuthGuard]},
  { path: '**', component: ErrorsComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
