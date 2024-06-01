import type { AuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface CreateUpdateKraObjectiveDto {
  code?: string;
  objective?: string;
  description?: string;
  keyResultAreaId?: string;
}

export interface KraObjectiveDto extends AuditedEntityDto<string> {
  code?: string;
  objective?: string;
  description?: string;
  keyResultAreaId?: string;
}

export interface KraObjectiveGetListInput extends PagedAndSortedResultRequestDto {
  code?: string;
  objective?: string;
  description?: string;
  keyResultAreaId?: string;
}
