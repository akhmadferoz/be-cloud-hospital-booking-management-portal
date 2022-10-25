import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum UserRole {
  ADMIN = "ADMIN",
  DOCTOR = "DOCTOR",
  PATIENT = "PATIENT"
}



type UserMetaData = {
  readOnlyFields: 'updatedAt';
}

type DoctorMetaData = {
  readOnlyFields: 'updatedAt';
}

type PatientMetaData = {
  readOnlyFields: 'updatedAt';
}

type AppointmentMetaData = {
  readOnlyFields: 'updatedAt';
}

export declare class User {
  readonly id: string;
  readonly fName?: string;
  readonly lName?: string;
  readonly email?: string;
  readonly role?: UserRole | keyof typeof UserRole;
  readonly createdAt: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Doctor {
  readonly id: string;
  readonly fName?: string;
  readonly lName?: string;
  readonly email?: string;
  readonly role?: UserRole | keyof typeof UserRole;
  readonly specialty?: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Doctor, DoctorMetaData>);
  static copyOf(source: Doctor, mutator: (draft: MutableModel<Doctor, DoctorMetaData>) => MutableModel<Doctor, DoctorMetaData> | void): Doctor;
}

export declare class Patient {
  readonly id: string;
  readonly fName?: string;
  readonly lName?: string;
  readonly email?: string;
  readonly role?: UserRole | keyof typeof UserRole;
  readonly createdAt: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Patient, PatientMetaData>);
  static copyOf(source: Patient, mutator: (draft: MutableModel<Patient, PatientMetaData>) => MutableModel<Patient, PatientMetaData> | void): Patient;
}

export declare class Appointment {
  readonly id: string;
  readonly doctorID: string;
  readonly doctor?: Doctor;
  readonly patientID: string;
  readonly patient?: Patient;
  readonly date?: string;
  readonly time?: string;
  readonly notes?: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Appointment, AppointmentMetaData>);
  static copyOf(source: Appointment, mutator: (draft: MutableModel<Appointment, AppointmentMetaData>) => MutableModel<Appointment, AppointmentMetaData> | void): Appointment;
}