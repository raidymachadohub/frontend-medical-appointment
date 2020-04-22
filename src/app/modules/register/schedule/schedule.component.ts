import {Component, OnInit} from '@angular/core';
import {Schedule} from '../../../model/schedule';

import {ScheduleService} from '../../../services/schedule.service';
import {ToastrService} from 'ngx-toastr';
import {CustomerService} from '../../../services/customer.service';
import {DoctorService} from '../../../services/doctor.service';
import {Customer} from '../../../model/customer';
import {Doctor} from '../../../model/doctor';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  private schedule: Schedule = new Schedule();
  private listDoctor: Array<Doctor> = new Array<Doctor>();
  dataSource: MatTableDataSource<Schedule> = new MatTableDataSource();

  constructor(private service: ScheduleService,
              private serviceCustomer: CustomerService,
              private serviceDoctor: DoctorService,
              private toast: ToastrService,
              private route: Router) {
    this.schedule.doctor_obj = new Doctor();
    this.schedule.customer_obj = new Customer();
  }

  ngOnInit() {
    this.loadCustomer();
    this.loadDoctor();
    this.loadSchedule();
  }

  public loadCustomer(): void {
    this.serviceCustomer.clearParameter();
    this.serviceCustomer.addParameter('username', localStorage.getItem('USER_STORAGE'));
    this.serviceCustomer.getOne().subscribe(x => {
      this.schedule.customer_obj = x;
    });
  }

  public loadDoctor(): void {
    this.serviceDoctor.getAll().subscribe(x => {
      this.listDoctor = x;
    });
  }


  public save(): void {
    this.service.save(this.schedule).subscribe(x => {
      if (x.id > 0) {
        this.toast.success('Cadastrado com sucesso');
        this.route.navigate(['/']);
      }
    });
  }


  public loadSchedule(): void {
    this.service.getAll().subscribe(x => {
      this.dataSource.data = x;
    });
  }

  public delete(row: Schedule) {
    this.service.delete(row.id).subscribe(x => {
    });
    this.toast.success('Deletado com sucesso');
    this.loadSchedule();
  }
}
