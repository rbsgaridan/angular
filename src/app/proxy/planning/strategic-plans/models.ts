import type { AuditedEntityDto, FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';
import type { StrategicGoalDto } from '../strategic-goals/models';

export interface CreateStrategicGoalInput {
  strategicPlanId?: string;
  goal: string;
  code: string;
  description?: string;
  sortOrder: number;
}

export interface CreateStrategicPlanInput {
  description?: string;
  title: string;
  yearFrom: number;
  yearTo: number;
  currentActive: boolean;
}

export interface GetStrategicGoalListOutputDto extends AuditedEntityDto<string> {
  goal?: string;
  code?: string;
  sortOrder: number;
}

export interface GetStrategicPlanListOutputDto extends AuditedEntityDto<string> {
  description?: string;
  duration?: string;
  title?: string;
  yearFrom: number;
  yearTo: number;
  currentActive: boolean;
  status?: string;
  approval?: string;
  filePath?: string;
}

export interface StrategicGoalGetListInput extends PagedAndSortedResultRequestDto {
}

export interface StrategicPlanDto extends FullAuditedEntityDto<string> {
  description?: string;
  duration?: string;
  title?: string;
  yearFrom: number;
  yearTo: number;
  currentActive: boolean;
  status?: string;
  approval?: string;
  strategicGoals: StrategicGoalDto[];
  filePath?: string;
}

export interface StrategicPlanGetListInput extends PagedAndSortedResultRequestDto {
}

export interface UpdateStrategicGoalInput {
  goal: string;
  code: string;
  description?: string;
  sortOrder: number;
}

export interface UpdateStrategicPlanInput {
  description?: string;
  title?: string;
  yearFrom: number;
  yearTo: number;
  currentActive: boolean;
  status?: string;
  approval?: string;
}
