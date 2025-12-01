// Student types

export interface Student {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  dateOfBirth?: string;
  nationality?: string;
  passportNumber?: string;
  address?: string;
  notes?: string;
  leadId?: string;
  contactId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateStudentDto {
  name: string;
  email?: string;
  phone?: string;
  dateOfBirth?: string;
  nationality?: string;
  passportNumber?: string;
  address?: string;
  notes?: string;
}

export interface UpdateStudentDto {
  name?: string;
  email?: string;
  phone?: string;
  dateOfBirth?: string;
  nationality?: string;
  passportNumber?: string;
  address?: string;
  notes?: string;
}
