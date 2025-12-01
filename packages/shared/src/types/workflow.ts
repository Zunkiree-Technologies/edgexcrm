// Workflow types

export interface WorkflowTrigger {
  event: string;
  condition?: Record<string, unknown>;
}

export interface WorkflowAction {
  type: 'create_task' | 'send_email' | 'send_sms' | 'send_whatsapp' | 'update_status';
  payload: Record<string, unknown>;
}

export interface Workflow {
  id: string;
  name: string;
  description?: string;
  trigger: WorkflowTrigger;
  actions: WorkflowAction[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateWorkflowDto {
  name: string;
  description?: string;
  trigger: WorkflowTrigger;
  actions: WorkflowAction[];
  isActive?: boolean;
}

export interface UpdateWorkflowDto {
  name?: string;
  description?: string;
  trigger?: WorkflowTrigger;
  actions?: WorkflowAction[];
  isActive?: boolean;
}
