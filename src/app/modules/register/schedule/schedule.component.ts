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
  public minDate = new Date();
  public schedule: Schedule = new Schedule();
  public listDoctor: Array<Doctor> = new Array<Doctor>();
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
  }

  public loadCustomer(): void {
    this.serviceCustomer.clearParameter();
    this.serviceCustomer.addParameter('username', localStorage.getItem('USER_STORAGE'));
    this.serviceCustomer.getOne().subscribe(x => {
      this.schedule.customer_obj = x;
      this.loadSchedule();
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
    this.service.clearParameter();
    this.service.addParameter('customer', String(this.schedule.customer_obj.id));
    this.service.getAll().subscribe(x => {
      if (x.length > 0) {
        this.dataSource.data = x.filter(x => x.customer_obj.id === this.schedule.customer_obj.id);
      }
    });
  }

  public delete(row: Schedule) {
    this.service.delete(row.id).subscribe(x => {
    });
    this.loadSchedule();
    this.toast.success('Deletado com sucesso');
  }
}
