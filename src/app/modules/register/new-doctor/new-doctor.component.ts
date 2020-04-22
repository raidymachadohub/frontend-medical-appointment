import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Doctor} from '../../../model/doctor';
import {SpecialtyService} from '../../../services/specialty.service';
import {Specialty} from '../../../model/specialty';
import {ToastrService} from 'ngx-toastr';
import {DoctorService} from '../../../services/doctor.service';

@Component({
  selector: 'app-new-doctor',
  templateUrl: './new-doctor.component.html',
  styleUrls: ['./new-doctor.component.scss']
})
export class NewDoctorComponent implements OnInit {

  private listSpecialty: Array<Specialty> = new Array<Specialty>();

  constructor(@Inject(MAT_DIALOG_DATA) public data: Doctor,
              public dialogRef: MatDialogRef<NewDoctorComponent>,
              private serviceSpecialty: SpecialtyService,
              private toast: ToastrService,
              private service: DoctorService) {

    if (this.data.id === undefined) {
      this.data.specialty_obj = new Specialty();
    }
  }

  ngOnInit() {
    this.serviceSpecialty.getAll().subscribe(x => {
      this.listSpecialty = x;
    });
  }

  public save(): void {

    if (this.data.id === undefined) {
      this.service.save(this.data).subscribe(x => {
        this.toast.success('Doutor cadastrado com sucesso');
        this.close();
      });
    } else {
      this.service.update(this.data.id, this.data).subscribe(x => {
        this.toast.success('Doutor atualizado com sucesso');
        this.close();
      });
    }

  }

  public close(): void {
    this.dialogRef.close();
  }
}
