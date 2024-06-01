import type { AuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface CreateUpdateKeyPerformanceIndicatorDto {
  kraObjectiveId?: string;
  code?: string;
  indicator?: string;
  description?: string;
  target: number;
  currentValue: number;
  unit?: string;
  isLeading: boolean;
}

export interface KeyPerformanceIndicatorDto extends AuditedEntityDto<string> {
  kraObjectiveId?: string;
  code?: string;
  indicator?: string;
  description?: string;
  target: number;
  currentValue: number;
  unit?: string;
  isLeading: boolean;
}

export interface KeyPerformanceIndicatorGetListInput extends PagedAndSortedResultRequestDto {
  kraObjectiveId?: string;
  code?: string;
  indicator?: string;
  description?: string;
  target?: number;
  currentValue?: number;
  unit?: string;
  isLeading?: boolean;
}
