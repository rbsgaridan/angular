import type { CreateUpdateOrgUnitDto, OrgUnitDto, OrgUnitGetListInput } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrgUnitService {
  apiName = 'Default';
  

  create = (input: CreateUpdateOrgUnitDto) =>
    this.restService.request<any, OrgUnitDto>({
      method: 'POST',
      url: '/api/app/org-unit',
      body: input,
    },
    { apiName: this.apiName });
  

  delete = (id: number) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/org-unit/${id}`,
    },
    { apiName: this.apiName });
  

  get = (id: number) =>
    this.restService.request<any, OrgUnitDto>({
      method: 'GET',
      url: `/api/app/org-unit/${id}`,
    },
    { apiName: this.apiName });
  

  getFullOrgTree = () =>
    this.restService.request<any, OrgUnitDto>({
      method: 'GET',
      url: '/api/app/org-unit/full-org-tree',
    },
    { apiName: this.apiName });
  

  getList = (input: OrgUnitGetListInput) =>
    this.restService.request<any, PagedResultDto<OrgUnitDto>>({
      method: 'GET',
      url: '/api/app/org-unit',
      params: { code: input.code, orderNumber: input.orderNumber, path: input.path, orgUnitTypeId: input.orgUnitTypeId, unitName: input.unitName, nameOfHead: input.nameOfHead, location: input.location, parentUnitId: input.parentUnitId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });
  

  update = (id: number, input: CreateUpdateOrgUnitDto) =>
    this.restService.request<any, OrgUnitDto>({
      method: 'PUT',
      url: `/api/app/org-unit/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
