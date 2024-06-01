import type { AuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface CreateUpdateMeansOfVerificationDto {
  name?: string;
  description?: string;
}

export interface MeansOfVerificationDto extends AuditedEntityDto<number> {
  name?: string;
  description?: string;
}

export interface MeansOfVerificationGetListInput extends PagedAndSortedResultRequestDto {
  name?: string;
  description?: string;
}
