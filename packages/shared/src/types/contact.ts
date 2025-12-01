// Contact types

export enum ContactType {
  STUDENT = 'STUDENT',
  PARENT = 'PARENT',
  PARTNER = 'PARTNER',
  FRIEND = 'FRIEND',
  OTHER = 'OTHER',
}

export interface Contact {
  id: string;
  type: ContactType;
  name: string;
  email?: string;
  phone?: string;
  address?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateContactDto {
  type: ContactType;
  name: string;
  email?: string;
  phone?: string;
  address?: string;
  notes?: string;
}

export interface UpdateContactDto {
  type?: ContactType;
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  notes?: string;
}
