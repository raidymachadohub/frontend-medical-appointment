import {Component, OnInit} from '@angular/core';
import {AuthTokenStorageService} from '../../../services/auth-token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private service: AuthTokenStorageService,
              private route: Router) {
  }

  ngOnInit() {
  }

  public logout(): void{
    this.service.invalidateStorage();
    this.route.navigate(['auth']);
  }

}
