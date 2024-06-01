import type { CreateUpdateKraObjectiveDto, KraObjectiveDto, KraObjectiveGetListInput } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KraObjectiveService {
  apiName = 'Default';
  

  create = (input: CreateUpdateKraObjectiveDto) =>
    this.restService.request<any, KraObjectiveDto>({
      method: 'POST',
      url: '/api/app/kra-objective',
      body: input,
    },
    { apiName: this.apiName });
  

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/kra-objective/${id}`,
    },
    { apiName: this.apiName });
  

  get = (id: string) =>
    this.restService.request<any, KraObjectiveDto>({
      method: 'GET',
      url: `/api/app/kra-objective/${id}`,
    },
    { apiName: this.apiName });
  

  getList = (input: KraObjectiveGetListInput) =>
    this.restService.request<any, PagedResultDto<KraObjectiveDto>>({
      method: 'GET',
      url: '/api/app/kra-objective',
      params: { code: input.code, objective: input.objective, description: input.description, keyResultAreaId: input.keyResultAreaId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });
  

  update = (id: string, input: CreateUpdateKraObjectiveDto) =>
    this.restService.request<any, KraObjectiveDto>({
      method: 'PUT',
      url: `/api/app/kra-objective/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
