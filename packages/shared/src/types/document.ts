// Document types

export interface Document {
  id: string;
  name: string;
  fileName: string;
  mimeType: string;
  size: number;
  s3Key: string;
  leadId?: string;
  studentId?: string;
  applicationId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateDocumentDto {
  name: string;
  fileName: string;
  mimeType: string;
  size: number;
  s3Key: string;
  leadId?: string;
  studentId?: string;
  applicationId?: string;
}

export interface UploadUrlResponse {
  uploadUrl: string;
  s3Key: string;
  expiresIn: number;
}
