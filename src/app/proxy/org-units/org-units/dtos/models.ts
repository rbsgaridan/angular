import type { FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface CreateUpdateOrgUnitDto {
  code?: string;
  orderNumber: number;
  path?: string;
  orgUnitTypeId: number;
  unitName?: string;
  nameOfHead?: string;
  location?: string;
  parentUnitId?: number;
}

export interface OrgUnitDto extends FullAuditedEntityDto<number> {
  code?: string;
  orderNumber: number;
  path?: string;
  orgUnitTypeId: number;
  unitName?: string;
  nameOfHead?: string;
  location?: string;
  parentUnitId?: number;
}

export interface OrgUnitGetListInput extends PagedAndSortedResultRequestDto {
  code?: string;
  orderNumber?: number;
  path?: string;
  orgUnitTypeId?: number;
  unitName?: string;
  nameOfHead?: string;
  location?: string;
  parentUnitId?: number;
}
