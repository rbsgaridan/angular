import type { EntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface CreateUpdatePmapsTimeLogDto {
  employeeId?: string;
  timeLog?: string;
  logType: number;
  userId?: string;
  adjustedby?: string;
  isManualEntry: boolean;
  serverDate?: string;
  machineId: number;
}

export interface PmapsTimeLogDto extends EntityDto<number> {
  employeeId?: string;
  timeLog?: string;
  logType: number;
  userId?: string;
  adjustedby?: string;
  isManualEntry: boolean;
  serverDate?: string;
  machineId: number;
}

export interface PmapsTimeLogGetListInput extends PagedAndSortedResultRequestDto {
  employeeId?: string;
  periodFrom?: string;
  periodTo?: string;
  logType?: number;
  userId?: string;
  machineId?: number;
}
