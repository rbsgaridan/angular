import type { AuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface CreateUpdateKeyResultAreaDto {
  strategicGoalId?: string;
  code?: string;
  name?: string;
  description?: string;
}

export interface KeyResultAreaDto extends AuditedEntityDto<string> {
  strategicGoalId?: string;
  code?: string;
  name?: string;
  description?: string;
}

export interface KeyResultAreaGetListInput extends PagedAndSortedResultRequestDto {
  strategicGoalId?: string;
  code?: string;
  name?: string;
  description?: string;
}
