// Lead types

export enum LeadSource {
  DIRECT = 'DIRECT',
  REFERRAL = 'REFERRAL',
  WEBSITE = 'WEBSITE',
  SOCIAL_MEDIA = 'SOCIAL_MEDIA',
  ADVERTISEMENT = 'ADVERTISEMENT',
  PARTNER = 'PARTNER',
  OTHER = 'OTHER',
}

export enum LeadStatus {
  NEW = 'NEW',
  CONTACTED = 'CONTACTED',
  QUALIFIED = 'QUALIFIED',
  PROPOSAL = 'PROPOSAL',
  NEGOTIATION = 'NEGOTIATION',
  FOLLOWUP = 'FOLLOWUP',
  CONVERTED = 'CONVERTED',
  LOST = 'LOST',
}

export interface Lead {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  source: LeadSource;
  status: LeadStatus;
  interestedIn?: string;
  notes?: string;
  assignedToId?: string;
  createdById?: string;
  contactId?: string;
  createdAt: string;
  updatedAt: string;
  convertedAt?: string;
}

export interface CreateLeadDto {
  name: string;
  email?: string;
  phone?: string;
  source?: LeadSource;
  interestedIn?: string;
  notes?: string;
  assignedToId?: string;
}

export interface UpdateLeadDto {
  name?: string;
  email?: string;
  phone?: string;
  source?: LeadSource;
  status?: LeadStatus;
  interestedIn?: string;
  notes?: string;
  assignedToId?: string;
}

export interface LeadNote {
  id: string;
  content: string;
  leadId: string;
  createdAt: string;
  updatedAt: string;
}
