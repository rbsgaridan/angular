import type { StrategicGoalDto } from './strategic-goals/models';
import type { CreateStrategicGoalInput, GetStrategicGoalListOutputDto, StrategicGoalGetListInput, UpdateStrategicGoalInput } from './strategic-plans/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StrategicGoalsService {
  apiName = 'Default';
  

  create = (input: CreateStrategicGoalInput) =>
    this.restService.request<any, StrategicGoalDto>({
      method: 'POST',
      url: '/api/app/strategic-goals',
      body: input,
    },
    { apiName: this.apiName });
  

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/strategic-goals/${id}`,
    },
    { apiName: this.apiName });
  

  get = (id: string) =>
    this.restService.request<any, StrategicGoalDto>({
      method: 'GET',
      url: `/api/app/strategic-goals/${id}`,
    },
    { apiName: this.apiName });
  

  getList = (input: StrategicGoalGetListInput) =>
    this.restService.request<any, PagedResultDto<GetStrategicGoalListOutputDto>>({
      method: 'GET',
      url: '/api/app/strategic-goals',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });
  

  update = (id: string, input: UpdateStrategicGoalInput) =>
    this.restService.request<any, StrategicGoalDto>({
      method: 'PUT',
      url: `/api/app/strategic-goals/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
