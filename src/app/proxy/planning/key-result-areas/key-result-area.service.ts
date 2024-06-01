import type { CreateUpdateKeyResultAreaDto, KeyResultAreaDto, KeyResultAreaGetListInput } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KeyResultAreaService {
  apiName = 'Default';
  

  create = (input: CreateUpdateKeyResultAreaDto) =>
    this.restService.request<any, KeyResultAreaDto>({
      method: 'POST',
      url: '/api/app/key-result-area',
      body: input,
    },
    { apiName: this.apiName });
  

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/key-result-area/${id}`,
    },
    { apiName: this.apiName });
  

  get = (id: string) =>
    this.restService.request<any, KeyResultAreaDto>({
      method: 'GET',
      url: `/api/app/key-result-area/${id}`,
    },
    { apiName: this.apiName });
  

  getList = (input: KeyResultAreaGetListInput) =>
    this.restService.request<any, PagedResultDto<KeyResultAreaDto>>({
      method: 'GET',
      url: '/api/app/key-result-area',
      params: { strategicGoalId: input.strategicGoalId, code: input.code, name: input.name, description: input.description, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });
  

  update = (id: string, input: CreateUpdateKeyResultAreaDto) =>
    this.restService.request<any, KeyResultAreaDto>({
      method: 'PUT',
      url: `/api/app/key-result-area/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
