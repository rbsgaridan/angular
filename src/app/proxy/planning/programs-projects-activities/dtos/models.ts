import type { AuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface CreateUpdateProgramProjectActivityDto {
  keyPerformanceId?: string;
  code?: string;
  name?: string;
  description?: string;
}

export interface ProgramProjectActivityDto extends AuditedEntityDto<string> {
  keyPerformanceId?: string;
  code?: string;
  name?: string;
  description?: string;
}

export interface ProgramProjectActivityGetListInput extends PagedAndSortedResultRequestDto {
  keyPerformanceId?: string;
  code?: string;
  name?: string;
  description?: string;
}
