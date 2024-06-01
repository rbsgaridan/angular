import type { CreateStrategicPlanInput, GetStrategicPlanListOutputDto, StrategicPlanDto, StrategicPlanGetListInput, UpdateStrategicPlanInput } from './strategic-plans/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StrategicPlansService {
  apiName = 'Default';
  

  create = (input: CreateStrategicPlanInput) =>
    this.restService.request<any, StrategicPlanDto>({
      method: 'POST',
      url: '/api/app/strategic-plans',
      body: input,
    },
    { apiName: this.apiName });
  

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/strategic-plans/${id}`,
    },
    { apiName: this.apiName });
  

  get = (id: string) =>
    this.restService.request<any, StrategicPlanDto>({
      method: 'GET',
      url: `/api/app/strategic-plans/${id}`,
    },
    { apiName: this.apiName });
  

  getList = (input: StrategicPlanGetListInput) =>
    this.restService.request<any, PagedResultDto<GetStrategicPlanListOutputDto>>({
      method: 'GET',
      url: '/api/app/strategic-plans',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });
  

  update = (id: string, input: UpdateStrategicPlanInput) =>
    this.restService.request<any, StrategicPlanDto>({
      method: 'PUT',
      url: `/api/app/strategic-plans/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
