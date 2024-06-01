import type { EntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface CreateUpdateDocumentStatusDto {
  name?: string;
  description?: string;
}

export interface DocumentStatusDto extends EntityDto<number> {
  name?: string;
  description?: string;
}

export interface DocumentStatusGetListInput extends PagedAndSortedResultRequestDto {
  name?: string;
  description?: string;
}
