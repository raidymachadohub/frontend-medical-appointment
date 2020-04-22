import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {CoreModule} from '../core/core.module';
import {AuthTokenStorageService} from '../../services/auth-token-storage.service';




@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CoreModule
  ],
  providers: [AuthTokenStorageService]
})
export class HomeModule { }
