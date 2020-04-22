import {Specialty} from './specialty';

export class Doctor {
  public id: number;
  public name: string;
  public crm: string;
  public dt_update: Date;
  public specialty_obj: Specialty;

  //
  public message: string;
  public code: number;
}
