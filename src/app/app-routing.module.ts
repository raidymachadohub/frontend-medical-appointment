import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DoctorComponent} from './modules/register/doctor/doctor.component';
import {AuthComponent} from './modules/login/auth/auth.component';
import {ActiveAuthGuardGuard} from './guard/active-auth-guard.guard';
import {ActiveGuardGuard} from './guard/active-guard.guard';
import {HomeComponent} from './modules/home/home/home.component';
import {MainComponent} from './modules/home/main/main.component';


const routes: Routes = [

  {
    canActivate: [ActiveAuthGuardGuard],
    path: 'auth', component: AuthComponent
  },
  {
    canActivate: [ActiveGuardGuard],
    canActivateChild: [ActiveGuardGuard],
    path: '', component: MainComponent,
    children: [
      {
        path: '', component: HomeComponent
      },
      {
        path: 'register-doctor', component: DoctorComponent
      },
    ]
  },
  {
    path: '**', redirectTo: '/', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
