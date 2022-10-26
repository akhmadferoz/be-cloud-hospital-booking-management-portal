/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        fName
        lName
        email
        role
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      fName
      lName
      email
      role
      createdAt
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fName
        lName
        email
        role
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDoctors = /* GraphQL */ `
  query SyncDoctors(
    $filter: ModelDoctorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDoctors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        fName
        lName
        email
        role
        specialty
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getDoctor = /* GraphQL */ `
  query GetDoctor($id: ID!) {
    getDoctor(id: $id) {
      id
      fName
      lName
      email
      role
      specialty
      createdAt
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const listDoctors = /* GraphQL */ `
  query ListDoctors(
    $filter: ModelDoctorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDoctors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fName
        lName
        email
        role
        specialty
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPatients = /* GraphQL */ `
  query SyncPatients(
    $filter: ModelPatientFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPatients(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        fName
        lName
        email
        phone
        dob
        age
        role
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPatient = /* GraphQL */ `
  query GetPatient($id: ID!) {
    getPatient(id: $id) {
      id
      fName
      lName
      email
      phone
      dob
      age
      role
      createdAt
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const listPatients = /* GraphQL */ `
  query ListPatients(
    $filter: ModelPatientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPatients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fName
        lName
        email
        phone
        dob
        age
        role
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAppointments = /* GraphQL */ `
  query SyncAppointments(
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAppointments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        doctorID
        doctor {
          id
          fName
          lName
          email
          role
          specialty
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        patientID
        patient {
          id
          fName
          lName
          email
          phone
          dob
          age
          role
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        bookingDateTime
        status
        notes
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getAppointment = /* GraphQL */ `
  query GetAppointment($id: ID!) {
    getAppointment(id: $id) {
      id
      doctorID
      doctor {
        id
        fName
        lName
        email
        role
        specialty
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      patientID
      patient {
        id
        fName
        lName
        email
        phone
        dob
        age
        role
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      bookingDateTime
      status
      notes
      createdAt
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const listAppointments = /* GraphQL */ `
  query ListAppointments(
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppointments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        doctorID
        doctor {
          id
          fName
          lName
          email
          role
          specialty
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        patientID
        patient {
          id
          fName
          lName
          email
          phone
          dob
          age
          role
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        bookingDateTime
        status
        notes
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const listAppointmentsByPatient = /* GraphQL */ `
  query ListAppointmentsByPatient(
    $patientID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppointmentsByPatient(
      patientID: $patientID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        doctorID
        doctor {
          id
          fName
          lName
          email
          role
          specialty
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        patientID
        patient {
          id
          fName
          lName
          email
          phone
          dob
          age
          role
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        bookingDateTime
        status
        notes
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const listAppointmentsByDoctor = /* GraphQL */ `
  query ListAppointmentsByDoctor(
    $doctorID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppointmentsByDoctor(
      doctorID: $doctorID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        doctorID
        doctor {
          id
          fName
          lName
          email
          role
          specialty
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        patientID
        patient {
          id
          fName
          lName
          email
          phone
          dob
          age
          role
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        bookingDateTime
        status
        notes
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
