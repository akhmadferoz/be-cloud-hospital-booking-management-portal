/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateDoctor = /* GraphQL */ `
  subscription OnCreateDoctor {
    onCreateDoctor {
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
export const onUpdateDoctor = /* GraphQL */ `
  subscription OnUpdateDoctor {
    onUpdateDoctor {
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
export const onDeleteDoctor = /* GraphQL */ `
  subscription OnDeleteDoctor {
    onDeleteDoctor {
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
export const onCreatePatient = /* GraphQL */ `
  subscription OnCreatePatient {
    onCreatePatient {
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
export const onUpdatePatient = /* GraphQL */ `
  subscription OnUpdatePatient {
    onUpdatePatient {
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
export const onDeletePatient = /* GraphQL */ `
  subscription OnDeletePatient {
    onDeletePatient {
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
export const onCreateAppointment = /* GraphQL */ `
  subscription OnCreateAppointment {
    onCreateAppointment {
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
        role
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      date
      time
      notes
      createdAt
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const onUpdateAppointment = /* GraphQL */ `
  subscription OnUpdateAppointment {
    onUpdateAppointment {
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
        role
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      date
      time
      notes
      createdAt
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const onDeleteAppointment = /* GraphQL */ `
  subscription OnDeleteAppointment {
    onDeleteAppointment {
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
        role
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      date
      time
      notes
      createdAt
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
