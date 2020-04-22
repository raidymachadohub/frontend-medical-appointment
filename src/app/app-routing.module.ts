import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DoctorComponent} from './modules/register/doctor/doctor.component';
import {AuthComponent} from './modules/login/auth/auth.component';
import {ActiveAuthGuardGuard} from './guard/active-auth-guard.guard';
import {ActiveGuardGuard} from './guard/active-guard.guard';
import {HomeComponent} from './modules/home/home/home.component';
import {MainComponent} from './modules/home/main/main.component';
import {SignupComponent} from './modules/register/signup/signup.component';
import {ScheduleComponent} from './modules/register/schedule/schedule.component';
import {SpecialtyComponent} from './modules/register/specialty/specialty.component';



const routes: Routes = [

  {
    path: 'signup', component: SignupComponent
  },
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
      {
        path: 'register-schedule', component: ScheduleComponent
      },
      {
        path: 'register-specialty', component: SpecialtyComponent
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
