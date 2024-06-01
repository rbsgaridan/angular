import type { CreateUpdateOrgUnitTypeDto, OrgUnitTypeDto, OrgUnitTypeGetListInput } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrgUnitTypeService {
  apiName = 'Default';
  

  create = (input: CreateUpdateOrgUnitTypeDto) =>
    this.restService.request<any, OrgUnitTypeDto>({
      method: 'POST',
      url: '/api/app/org-unit-type',
      body: input,
    },
    { apiName: this.apiName });
  

  delete = (id: number) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/org-unit-type/${id}`,
    },
    { apiName: this.apiName });
  

  get = (id: number) =>
    this.restService.request<any, OrgUnitTypeDto>({
      method: 'GET',
      url: `/api/app/org-unit-type/${id}`,
    },
    { apiName: this.apiName });
  

  getList = (input: OrgUnitTypeGetListInput) =>
    this.restService.request<any, PagedResultDto<OrgUnitTypeDto>>({
      method: 'GET',
      url: '/api/app/org-unit-type',
      params: { name: input.name, description: input.description, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });
  

  update = (id: number, input: CreateUpdateOrgUnitTypeDto) =>
    this.restService.request<any, OrgUnitTypeDto>({
      method: 'PUT',
      url: `/api/app/org-unit-type/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
