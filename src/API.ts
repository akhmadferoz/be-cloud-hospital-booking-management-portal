/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  fName?: string | null,
  lName?: string | null,
  email?: string | null,
  role?: USER_ROLE | null,
  createdAt?: string | null,
  _version?: number | null,
};

export enum USER_ROLE {
  ADMIN = "ADMIN",
  DOCTOR = "DOCTOR",
  PATIENT = "PATIENT",
}


export type ModelUserConditionInput = {
  fName?: ModelStringInput | null,
  lName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  role?: ModelUSER_ROLEInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelUSER_ROLEInput = {
  eq?: USER_ROLE | null,
  ne?: USER_ROLE | null,
};

export type User = {
  __typename: "User",
  id: string,
  fName?: string | null,
  lName?: string | null,
  email?: string | null,
  role?: USER_ROLE | null,
  createdAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  fName?: string | null,
  lName?: string | null,
  email?: string | null,
  role?: USER_ROLE | null,
  createdAt?: string | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateDoctorInput = {
  id?: string | null,
  fName?: string | null,
  lName?: string | null,
  email?: string | null,
  role?: USER_ROLE | null,
  specialty?: string | null,
  createdAt?: string | null,
  _version?: number | null,
};

export type ModelDoctorConditionInput = {
  fName?: ModelStringInput | null,
  lName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  role?: ModelUSER_ROLEInput | null,
  specialty?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelDoctorConditionInput | null > | null,
  or?: Array< ModelDoctorConditionInput | null > | null,
  not?: ModelDoctorConditionInput | null,
};

export type Doctor = {
  __typename: "Doctor",
  id: string,
  fName?: string | null,
  lName?: string | null,
  email?: string | null,
  role?: USER_ROLE | null,
  specialty?: string | null,
  createdAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  updatedAt: string,
};

export type UpdateDoctorInput = {
  id: string,
  fName?: string | null,
  lName?: string | null,
  email?: string | null,
  role?: USER_ROLE | null,
  specialty?: string | null,
  createdAt?: string | null,
  _version?: number | null,
};

export type DeleteDoctorInput = {
  id: string,
  _version?: number | null,
};

export type CreatePatientInput = {
  id?: string | null,
  fName?: string | null,
  lName?: string | null,
  email?: string | null,
  phone?: string | null,
  dob?: string | null,
  age?: number | null,
  role?: USER_ROLE | null,
  createdAt?: string | null,
  _version?: number | null,
};

export type ModelPatientConditionInput = {
  fName?: ModelStringInput | null,
  lName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  dob?: ModelStringInput | null,
  age?: ModelIntInput | null,
  role?: ModelUSER_ROLEInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelPatientConditionInput | null > | null,
  or?: Array< ModelPatientConditionInput | null > | null,
  not?: ModelPatientConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Patient = {
  __typename: "Patient",
  id: string,
  fName?: string | null,
  lName?: string | null,
  email?: string | null,
  phone?: string | null,
  dob?: string | null,
  age?: number | null,
  role?: USER_ROLE | null,
  createdAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  updatedAt: string,
};

export type UpdatePatientInput = {
  id: string,
  fName?: string | null,
  lName?: string | null,
  email?: string | null,
  phone?: string | null,
  dob?: string | null,
  age?: number | null,
  role?: USER_ROLE | null,
  createdAt?: string | null,
  _version?: number | null,
};

export type DeletePatientInput = {
  id: string,
  _version?: number | null,
};

export type CreateAppointmentInput = {
  id?: string | null,
  doctorID: string,
  patientID: string,
  bookingDateTime?: string | null,
  status?: APPOINTMENT_STATUS | null,
  notes?: string | null,
  createdAt?: string | null,
  _version?: number | null,
};

export enum APPOINTMENT_STATUS {
  PENDING = "PENDING",
  CONFIRMED = "CONFIRMED",
  CANCELLED = "CANCELLED",
}


export type ModelAppointmentConditionInput = {
  doctorID?: ModelIDInput | null,
  patientID?: ModelIDInput | null,
  bookingDateTime?: ModelStringInput | null,
  status?: ModelAPPOINTMENT_STATUSInput | null,
  notes?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelAppointmentConditionInput | null > | null,
  or?: Array< ModelAppointmentConditionInput | null > | null,
  not?: ModelAppointmentConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelAPPOINTMENT_STATUSInput = {
  eq?: APPOINTMENT_STATUS | null,
  ne?: APPOINTMENT_STATUS | null,
};

export type Appointment = {
  __typename: "Appointment",
  id: string,
  doctorID: string,
  doctor?: Doctor | null,
  patientID: string,
  patient?: Patient | null,
  bookingDateTime?: string | null,
  status?: APPOINTMENT_STATUS | null,
  notes?: string | null,
  createdAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  updatedAt: string,
};

export type UpdateAppointmentInput = {
  id: string,
  doctorID?: string | null,
  patientID?: string | null,
  bookingDateTime?: string | null,
  status?: APPOINTMENT_STATUS | null,
  notes?: string | null,
  createdAt?: string | null,
  _version?: number | null,
};

export type DeleteAppointmentInput = {
  id: string,
  _version?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  fName?: ModelStringInput | null,
  lName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  role?: ModelUSER_ROLEInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelDoctorFilterInput = {
  id?: ModelIDInput | null,
  fName?: ModelStringInput | null,
  lName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  role?: ModelUSER_ROLEInput | null,
  specialty?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelDoctorFilterInput | null > | null,
  or?: Array< ModelDoctorFilterInput | null > | null,
  not?: ModelDoctorFilterInput | null,
};

export type ModelDoctorConnection = {
  __typename: "ModelDoctorConnection",
  items?:  Array<Doctor | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPatientFilterInput = {
  id?: ModelIDInput | null,
  fName?: ModelStringInput | null,
  lName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  dob?: ModelStringInput | null,
  age?: ModelIntInput | null,
  role?: ModelUSER_ROLEInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelPatientFilterInput | null > | null,
  or?: Array< ModelPatientFilterInput | null > | null,
  not?: ModelPatientFilterInput | null,
};

export type ModelPatientConnection = {
  __typename: "ModelPatientConnection",
  items?:  Array<Patient | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelAppointmentFilterInput = {
  id?: ModelIDInput | null,
  doctorID?: ModelIDInput | null,
  patientID?: ModelIDInput | null,
  bookingDateTime?: ModelStringInput | null,
  status?: ModelAPPOINTMENT_STATUSInput | null,
  notes?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelAppointmentFilterInput | null > | null,
  or?: Array< ModelAppointmentFilterInput | null > | null,
  not?: ModelAppointmentFilterInput | null,
};

export type ModelAppointmentConnection = {
  __typename: "ModelAppointmentConnection",
  items?:  Array<Appointment | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    fName?: string | null,
    lName?: string | null,
    email?: string | null,
    role?: USER_ROLE | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    fName?: string | null,
    lName?: string | null,
    email?: string | null,
    role?: USER_ROLE | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    fName?: string | null,
    lName?: string | null,
    email?: string | null,
    role?: USER_ROLE | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type CreateDoctorMutationVariables = {
  input: CreateDoctorInput,
  condition?: ModelDoctorConditionInput | null,
};

export type CreateDoctorMutation = {
  createDoctor?:  {
    __typename: "Doctor",
    id: string,
    fName?: string | null,
    lName?: string | null,
    email?: string | null,
    role?: USER_ROLE | null,
    specialty?: string | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type UpdateDoctorMutationVariables = {
  input: UpdateDoctorInput,
  condition?: ModelDoctorConditionInput | null,
};

export type UpdateDoctorMutation = {
  updateDoctor?:  {
    __typename: "Doctor",
    id: string,
    fName?: string | null,
    lName?: string | null,
    email?: string | null,
    role?: USER_ROLE | null,
    specialty?: string | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type DeleteDoctorMutationVariables = {
  input: DeleteDoctorInput,
  condition?: ModelDoctorConditionInput | null,
};

export type DeleteDoctorMutation = {
  deleteDoctor?:  {
    __typename: "Doctor",
    id: string,
    fName?: string | null,
    lName?: string | null,
    email?: string | null,
    role?: USER_ROLE | null,
    specialty?: string | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type CreatePatientMutationVariables = {
  input: CreatePatientInput,
  condition?: ModelPatientConditionInput | null,
};

export type CreatePatientMutation = {
  createPatient?:  {
    __typename: "Patient",
    id: string,
    fName?: string | null,
    lName?: string | null,
    email?: string | null,
    phone?: string | null,
    dob?: string | null,
    age?: number | null,
    role?: USER_ROLE | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type UpdatePatientMutationVariables = {
  input: UpdatePatientInput,
  condition?: ModelPatientConditionInput | null,
};

export type UpdatePatientMutation = {
  updatePatient?:  {
    __typename: "Patient",
    id: string,
    fName?: string | null,
    lName?: string | null,
    email?: string | null,
    phone?: string | null,
    dob?: string | null,
    age?: number | null,
    role?: USER_ROLE | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type DeletePatientMutationVariables = {
  input: DeletePatientInput,
  condition?: ModelPatientConditionInput | null,
};

export type DeletePatientMutation = {
  deletePatient?:  {
    __typename: "Patient",
    id: string,
    fName?: string | null,
    lName?: string | null,
    email?: string | null,
    phone?: string | null,
    dob?: string | null,
    age?: number | null,
    role?: USER_ROLE | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type CreateAppointmentMutationVariables = {
  input: CreateAppointmentInput,
  condition?: ModelAppointmentConditionInput | null,
};

export type CreateAppointmentMutation = {
  createAppointment?:  {
    __typename: "Appointment",
    id: string,
    doctorID: string,
    doctor?:  {
      __typename: "Doctor",
      id: string,
      fName?: string | null,
      lName?: string | null,
      email?: string | null,
      role?: USER_ROLE | null,
      specialty?: string | null,
      createdAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null,
    patientID: string,
    patient?:  {
      __typename: "Patient",
      id: string,
      fName?: string | null,
      lName?: string | null,
      email?: string | null,
      phone?: string | null,
      dob?: string | null,
      age?: number | null,
      role?: USER_ROLE | null,
      createdAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null,
    bookingDateTime?: string | null,
    status?: APPOINTMENT_STATUS | null,
    notes?: string | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type UpdateAppointmentMutationVariables = {
  input: UpdateAppointmentInput,
  condition?: ModelAppointmentConditionInput | null,
};

export type UpdateAppointmentMutation = {
  updateAppointment?:  {
    __typename: "Appointment",
    id: string,
    doctorID: string,
    doctor?:  {
      __typename: "Doctor",
      id: string,
      fName?: string | null,
      lName?: string | null,
      email?: string | null,
      role?: USER_ROLE | null,
      specialty?: string | null,
      createdAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null,
    patientID: string,
    patient?:  {
      __typename: "Patient",
      id: string,
      fName?: string | null,
      lName?: string | null,
      email?: string | null,
      phone?: string | null,
      dob?: string | null,
      age?: number | null,
      role?: USER_ROLE | null,
      createdAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null,
    bookingDateTime?: string | null,
    status?: APPOINTMENT_STATUS | null,
    notes?: string | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type DeleteAppointmentMutationVariables = {
  input: DeleteAppointmentInput,
  condition?: ModelAppointmentConditionInput | null,
};

export type DeleteAppointmentMutation = {
  deleteAppointment?:  {
    __typename: "Appointment",
    id: string,
    doctorID: string,
    doctor?:  {
      __typename: "Doctor",
      id: string,
      fName?: string | null,
      lName?: string | null,
      email?: string | null,
      role?: USER_ROLE | null,
      specialty?: string | null,
      createdAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null,
    patientID: string,
    patient?:  {
      __typename: "Patient",
      id: string,
      fName?: string | null,
      lName?: string | null,
      email?: string | null,
      phone?: string | null,
      dob?: string | null,
      age?: number | null,
      role?: USER_ROLE | null,
      createdAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null,
    bookingDateTime?: string | null,
    status?: APPOINTMENT_STATUS | null,
    notes?: string | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      fName?: string | null,
      lName?: string | null,
      email?: string | null,
      role?: USER_ROLE | null,
      createdAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    fName?: string | null,
    lName?: string | null,
    email?: string | null,
    role?: USER_ROLE | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      fName?: string | null,
      lName?: string | null,
      email?: string | null,
      role?: USER_ROLE | null,
      createdAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncDoctorsQueryVariables = {
  filter?: ModelDoctorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncDoctorsQuery = {
  syncDoctors?:  {
    __typename: "ModelDoctorConnection",
    items?:  Array< {
      __typename: "Doctor",
      id: string,
      fName?: string | null,
      lName?: string | null,
      email?: string | null,
      role?: USER_ROLE | null,
      specialty?: string | null,
      createdAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetDoctorQueryVariables = {
  id: string,
};

export type GetDoctorQuery = {
  getDoctor?:  {
    __typename: "Doctor",
    id: string,
    fName?: string | null,
    lName?: string | null,
    email?: string | null,
    role?: USER_ROLE | null,
    specialty?: string | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type ListDoctorsQueryVariables = {
  filter?: ModelDoctorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDoctorsQuery = {
  listDoctors?:  {
    __typename: "ModelDoctorConnection",
    items?:  Array< {
      __typename: "Doctor",
      id: string,
      fName?: string | null,
      lName?: string | null,
      email?: string | null,
      role?: USER_ROLE | null,
      specialty?: string | null,
      createdAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPatientsQueryVariables = {
  filter?: ModelPatientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPatientsQuery = {
  syncPatients?:  {
    __typename: "ModelPatientConnection",
    items?:  Array< {
      __typename: "Patient",
      id: string,
      fName?: string | null,
      lName?: string | null,
      email?: string | null,
      phone?: string | null,
      dob?: string | null,
      age?: number | null,
      role?: USER_ROLE | null,
      createdAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPatientQueryVariables = {
  id: string,
};

export type GetPatientQuery = {
  getPatient?:  {
    __typename: "Patient",
    id: string,
    fName?: string | null,
    lName?: string | null,
    email?: string | null,
    phone?: string | null,
    dob?: string | null,
    age?: number | null,
    role?: USER_ROLE | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type ListPatientsQueryVariables = {
  filter?: ModelPatientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPatientsQuery = {
  listPatients?:  {
    __typename: "ModelPatientConnection",
    items?:  Array< {
      __typename: "Patient",
      id: string,
      fName?: string | null,
      lName?: string | null,
      email?: string | null,
      phone?: string | null,
      dob?: string | null,
      age?: number | null,
      role?: USER_ROLE | null,
      createdAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAppointmentsQueryVariables = {
  filter?: ModelAppointmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAppointmentsQuery = {
  syncAppointments?:  {
    __typename: "ModelAppointmentConnection",
    items?:  Array< {
      __typename: "Appointment",
      id: string,
      doctorID: string,
      doctor?:  {
        __typename: "Doctor",
        id: string,
        fName?: string | null,
        lName?: string | null,
        email?: string | null,
        role?: USER_ROLE | null,
        specialty?: string | null,
        createdAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        updatedAt: string,
      } | null,
      patientID: string,
      patient?:  {
        __typename: "Patient",
        id: string,
        fName?: string | null,
        lName?: string | null,
        email?: string | null,
        phone?: string | null,
        dob?: string | null,
        age?: number | null,
        role?: USER_ROLE | null,
        createdAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        updatedAt: string,
      } | null,
      bookingDateTime?: string | null,
      status?: APPOINTMENT_STATUS | null,
      notes?: string | null,
      createdAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetAppointmentQueryVariables = {
  id: string,
};

export type GetAppointmentQuery = {
  getAppointment?:  {
    __typename: "Appointment",
    id: string,
    doctorID: string,
    doctor?:  {
      __typename: "Doctor",
      id: string,
      fName?: string | null,
      lName?: string | null,
      email?: string | null,
      role?: USER_ROLE | null,
      specialty?: string | null,
      createdAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null,
    patientID: string,
    patient?:  {
      __typename: "Patient",
      id: string,
      fName?: string | null,
      lName?: string | null,
      email?: string | null,
      phone?: string | null,
      dob?: string | null,
      age?: number | null,
      role?: USER_ROLE | null,
      createdAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null,
    bookingDateTime?: string | null,
    status?: APPOINTMENT_STATUS | null,
    notes?: string | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type ListAppointmentsQueryVariables = {
  filter?: ModelAppointmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAppointmentsQuery = {
  listAppointments?:  {
    __typename: "ModelAppointmentConnection",
    items?:  Array< {
      __typename: "Appointment",
      id: string,
      doctorID: string,
      doctor?:  {
        __typename: "Doctor",
        id: string,
        fName?: string | null,
        lName?: string | null,
        email?: string | null,
        role?: USER_ROLE | null,
        specialty?: string | null,
        createdAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        updatedAt: string,
      } | null,
      patientID: string,
      patient?:  {
        __typename: "Patient",
        id: string,
        fName?: string | null,
        lName?: string | null,
        email?: string | null,
        phone?: string | null,
        dob?: string | null,
        age?: number | null,
        role?: USER_ROLE | null,
        createdAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        updatedAt: string,
      } | null,
      bookingDateTime?: string | null,
      status?: APPOINTMENT_STATUS | null,
      notes?: string | null,
      createdAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ListAppointmentsByPatientQueryVariables = {
  patientID?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAppointmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAppointmentsByPatientQuery = {
  listAppointmentsByPatient?:  {
    __typename: "ModelAppointmentConnection",
    items?:  Array< {
      __typename: "Appointment",
      id: string,
      doctorID: string,
      doctor?:  {
        __typename: "Doctor",
        id: string,
        fName?: string | null,
        lName?: string | null,
        email?: string | null,
        role?: USER_ROLE | null,
        specialty?: string | null,
        createdAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        updatedAt: string,
      } | null,
      patientID: string,
      patient?:  {
        __typename: "Patient",
        id: string,
        fName?: string | null,
        lName?: string | null,
        email?: string | null,
        phone?: string | null,
        dob?: string | null,
        age?: number | null,
        role?: USER_ROLE | null,
        createdAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        updatedAt: string,
      } | null,
      bookingDateTime?: string | null,
      status?: APPOINTMENT_STATUS | null,
      notes?: string | null,
      createdAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ListAppointmentsByDoctorQueryVariables = {
  doctorID?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAppointmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAppointmentsByDoctorQuery = {
  listAppointmentsByDoctor?:  {
    __typename: "ModelAppointmentConnection",
    items?:  Array< {
      __typename: "Appointment",
      id: string,
      doctorID: string,
      doctor?:  {
        __typename: "Doctor",
        id: string,
        fName?: string | null,
        lName?: string | null,
        email?: string | null,
        role?: USER_ROLE | null,
        specialty?: string | null,
        createdAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        updatedAt: string,
      } | null,
      patientID: string,
      patient?:  {
        __typename: "Patient",
        id: string,
        fName?: string | null,
        lName?: string | null,
        email?: string | null,
        phone?: string | null,
        dob?: string | null,
        age?: number | null,
        role?: USER_ROLE | null,
        createdAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        updatedAt: string,
      } | null,
      bookingDateTime?: string | null,
      status?: APPOINTMENT_STATUS | null,
      notes?: string | null,
      createdAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    fName?: string | null,
    lName?: string | null,
    email?: string | null,
    role?: USER_ROLE | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    fName?: string | null,
    lName?: string | null,
    email?: string | null,
    role?: USER_ROLE | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    fName?: string | null,
    lName?: string | null,
    email?: string | null,
    role?: USER_ROLE | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type OnCreateDoctorSubscription = {
  onCreateDoctor?:  {
    __typename: "Doctor",
    id: string,
    fName?: string | null,
    lName?: string | null,
    email?: string | null,
    role?: USER_ROLE | null,
    specialty?: string | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type OnUpdateDoctorSubscription = {
  onUpdateDoctor?:  {
    __typename: "Doctor",
    id: string,
    fName?: string | null,
    lName?: string | null,
    email?: string | null,
    role?: USER_ROLE | null,
    specialty?: string | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type OnDeleteDoctorSubscription = {
  onDeleteDoctor?:  {
    __typename: "Doctor",
    id: string,
    fName?: string | null,
    lName?: string | null,
    email?: string | null,
    role?: USER_ROLE | null,
    specialty?: string | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type OnCreatePatientSubscription = {
  onCreatePatient?:  {
    __typename: "Patient",
    id: string,
    fName?: string | null,
    lName?: string | null,
    email?: string | null,
    phone?: string | null,
    dob?: string | null,
    age?: number | null,
    role?: USER_ROLE | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type OnUpdatePatientSubscription = {
  onUpdatePatient?:  {
    __typename: "Patient",
    id: string,
    fName?: string | null,
    lName?: string | null,
    email?: string | null,
    phone?: string | null,
    dob?: string | null,
    age?: number | null,
    role?: USER_ROLE | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type OnDeletePatientSubscription = {
  onDeletePatient?:  {
    __typename: "Patient",
    id: string,
    fName?: string | null,
    lName?: string | null,
    email?: string | null,
    phone?: string | null,
    dob?: string | null,
    age?: number | null,
    role?: USER_ROLE | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type OnCreateAppointmentSubscription = {
  onCreateAppointment?:  {
    __typename: "Appointment",
    id: string,
    doctorID: string,
    doctor?:  {
      __typename: "Doctor",
      id: string,
      fName?: string | null,
      lName?: string | null,
      email?: string | null,
      role?: USER_ROLE | null,
      specialty?: string | null,
      createdAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null,
    patientID: string,
    patient?:  {
      __typename: "Patient",
      id: string,
      fName?: string | null,
      lName?: string | null,
      email?: string | null,
      phone?: string | null,
      dob?: string | null,
      age?: number | null,
      role?: USER_ROLE | null,
      createdAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null,
    bookingDateTime?: string | null,
    status?: APPOINTMENT_STATUS | null,
    notes?: string | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type OnUpdateAppointmentSubscription = {
  onUpdateAppointment?:  {
    __typename: "Appointment",
    id: string,
    doctorID: string,
    doctor?:  {
      __typename: "Doctor",
      id: string,
      fName?: string | null,
      lName?: string | null,
      email?: string | null,
      role?: USER_ROLE | null,
      specialty?: string | null,
      createdAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null,
    patientID: string,
    patient?:  {
      __typename: "Patient",
      id: string,
      fName?: string | null,
      lName?: string | null,
      email?: string | null,
      phone?: string | null,
      dob?: string | null,
      age?: number | null,
      role?: USER_ROLE | null,
      createdAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null,
    bookingDateTime?: string | null,
    status?: APPOINTMENT_STATUS | null,
    notes?: string | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type OnDeleteAppointmentSubscription = {
  onDeleteAppointment?:  {
    __typename: "Appointment",
    id: string,
    doctorID: string,
    doctor?:  {
      __typename: "Doctor",
      id: string,
      fName?: string | null,
      lName?: string | null,
      email?: string | null,
      role?: USER_ROLE | null,
      specialty?: string | null,
      createdAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null,
    patientID: string,
    patient?:  {
      __typename: "Patient",
      id: string,
      fName?: string | null,
      lName?: string | null,
      email?: string | null,
      phone?: string | null,
      dob?: string | null,
      age?: number | null,
      role?: USER_ROLE | null,
      createdAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null,
    bookingDateTime?: string | null,
    status?: APPOINTMENT_STATUS | null,
    notes?: string | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};
