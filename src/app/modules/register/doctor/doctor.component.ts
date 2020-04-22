import {Component, OnInit} from '@angular/core';
import {DoctorService} from '../../../services/doctor.service';
import {Doctor} from '../../../model/doctor';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {NewDoctorComponent} from '../new-doctor/new-doctor.component';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  dataSource: MatTableDataSource<Doctor> = new MatTableDataSource();
  private doctor: Doctor = new Doctor();

  constructor(private service: DoctorService,
              private dialog: MatDialog,
              private toast: ToastrService) {
  }

  ngOnInit() {
    this.loadTable();
  }

  public loadTable(): void {
    this.service.getAll().subscribe(x => {
      this.dataSource.data = x;
    });
  }

  public edit(doctor: Doctor) {
    this.openDialog(doctor);
  }

  public delete(doctor: Doctor) {
    try {
      this.service.delete(doctor.id).subscribe(x => {
        if (x.code === 200) {
          this.toast.success(x.message);
        } else {
          this.toast.error(x.message);
        }
        this.loadTable();
      });
    } catch (e) {

    }

  }

  public new(): void {
    this.doctor = new Doctor();
    this.openDialog(this.doctor);
  }

  public openDialog(doctor: Doctor): void {
    this.dialog.open(NewDoctorComponent, {
      width: '500px',
      maxWidth: '',
      data: doctor,
      disableClose: true
    }).afterClosed().subscribe(result => {
      this.loadTable();
    });
  }


}
