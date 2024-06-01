import type { FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface CreateUpdateRatingPeriodDto {
  description?: string;
  start?: string;
  end?: string;
  isActive: boolean;
}

export interface RatingPeriodDto extends FullAuditedEntityDto<number> {
  description?: string;
  start?: string;
  end?: string;
  isActive: boolean;
}

export interface RatingPeriodGetListInput extends PagedAndSortedResultRequestDto {
  description?: string;
  start?: string;
  end?: string;
  isActive?: boolean;
}
