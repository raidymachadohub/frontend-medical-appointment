import {Customer} from './customer';
import {Doctor} from './doctor';

export class Schedule {
  public id: number;
  public dt_appointment: Date;
  public str_appointment: string;
  public customer_obj: Customer;
  public doctor_obj: Doctor;
  public dt_update: Date;
}
