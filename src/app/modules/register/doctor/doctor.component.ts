import {Component, OnInit} from '@angular/core';
import {DoctorService} from '../../../services/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  constructor(private service: DoctorService) {
  }

  ngOnInit() {
    this.service.getAll().subscribe(x => {
      console.log(x);
    });
  }

}
