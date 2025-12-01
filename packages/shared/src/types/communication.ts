// Communication types

export enum CommunicationType {
  EMAIL = 'EMAIL',
  SMS = 'SMS',
  WHATSAPP = 'WHATSAPP',
  CALL = 'CALL',
  NOTE = 'NOTE',
}

export enum CommunicationDirection {
  INBOUND = 'INBOUND',
  OUTBOUND = 'OUTBOUND',
}

export enum CommunicationStatus {
  PENDING = 'PENDING',
  SENT = 'SENT',
  DELIVERED = 'DELIVERED',
  READ = 'READ',
  FAILED = 'FAILED',
}

export interface Communication {
  id: string;
  type: CommunicationType;
  direction: CommunicationDirection;
  subject?: string;
  content: string;
  status: CommunicationStatus;
  templateId?: string;
  externalId?: string;
  leadId?: string;
  studentId?: string;
  sentById?: string;
  createdAt: string;
  updatedAt: string;
}

export interface SendEmailDto {
  to: string;
  subject: string;
  content: string;
  leadId?: string;
  studentId?: string;
}

export interface SendSmsDto {
  to: string;
  content: string;
  leadId?: string;
  studentId?: string;
}

export interface SendWhatsAppDto {
  to: string;
  templateId: string;
  parameters?: Record<string, string>;
  leadId?: string;
  studentId?: string;
}
