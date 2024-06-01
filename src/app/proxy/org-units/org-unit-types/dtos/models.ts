import type { EntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface CreateUpdateOrgUnitTypeDto {
  name?: string;
  description?: string;
}

export interface OrgUnitTypeDto extends EntityDto<number> {
  name?: string;
  description?: string;
}

export interface OrgUnitTypeGetListInput extends PagedAndSortedResultRequestDto {
  name?: string;
  description?: string;
}
