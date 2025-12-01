// Application types

export enum ApplicationStatus {
  PENDING = 'PENDING',
  SUBMITTED = 'SUBMITTED',
  UNDER_REVIEW = 'UNDER_REVIEW',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
  DEFERRED = 'DEFERRED',
  WITHDRAWN = 'WITHDRAWN',
}

export interface Application {
  id: string;
  studentId: string;
  institution: string;
  program: string;
  intake?: string;
  status: ApplicationStatus;
  submittedAt?: string;
  decisionAt?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateApplicationDto {
  studentId: string;
  institution: string;
  program: string;
  intake?: string;
  notes?: string;
}

export interface UpdateApplicationDto {
  institution?: string;
  program?: string;
  intake?: string;
  status?: ApplicationStatus;
  notes?: string;
}
