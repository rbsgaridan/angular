import type { CreateUpdateKeyPerformanceIndicatorDto, KeyPerformanceIndicatorDto, KeyPerformanceIndicatorGetListInput } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KeyPerformanceIndicatorService {
  apiName = 'Default';
  

  create = (input: CreateUpdateKeyPerformanceIndicatorDto) =>
    this.restService.request<any, KeyPerformanceIndicatorDto>({
      method: 'POST',
      url: '/api/app/key-performance-indicator',
      body: input,
    },
    { apiName: this.apiName });
  

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/key-performance-indicator/${id}`,
    },
    { apiName: this.apiName });
  

  get = (id: string) =>
    this.restService.request<any, KeyPerformanceIndicatorDto>({
      method: 'GET',
      url: `/api/app/key-performance-indicator/${id}`,
    },
    { apiName: this.apiName });
  

  getList = (input: KeyPerformanceIndicatorGetListInput) =>
    this.restService.request<any, PagedResultDto<KeyPerformanceIndicatorDto>>({
      method: 'GET',
      url: '/api/app/key-performance-indicator',
      params: { kraObjectiveId: input.kraObjectiveId, code: input.code, indicator: input.indicator, description: input.description, target: input.target, currentValue: input.currentValue, unit: input.unit, isLeading: input.isLeading, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });
  

  update = (id: string, input: CreateUpdateKeyPerformanceIndicatorDto) =>
    this.restService.request<any, KeyPerformanceIndicatorDto>({
      method: 'PUT',
      url: `/api/app/key-performance-indicator/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
