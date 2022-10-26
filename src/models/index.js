// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const UserRole = {
  "ADMIN": "ADMIN",
  "DOCTOR": "DOCTOR",
  "PATIENT": "PATIENT"
};

const AppointmentStatus = {
  "PENDING": "PENDING",
  "CONFIRMED": "CONFIRMED",
  "CANCELLED": "CANCELLED"
};

const { User, Doctor, Patient, Appointment } = initSchema(schema);

export {
  User,
  Doctor,
  Patient,
  Appointment,
  UserRole,
  AppointmentStatus
};