import type { AuditedEntityDto } from '@abp/ng.core';

export interface StrategicGoalDto extends AuditedEntityDto<string> {
  goal?: string;
  code?: string;
  description?: string;
  sortOrder: number;
}
