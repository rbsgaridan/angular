import type { CreateUpdateProgramProjectActivityDto, ProgramProjectActivityDto, ProgramProjectActivityGetListInput } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProgramProjectActivityService {
  apiName = 'Default';
  

  create = (input: CreateUpdateProgramProjectActivityDto) =>
    this.restService.request<any, ProgramProjectActivityDto>({
      method: 'POST',
      url: '/api/app/program-project-activity',
      body: input,
    },
    { apiName: this.apiName });
  

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/program-project-activity/${id}`,
    },
    { apiName: this.apiName });
  

  get = (id: string) =>
    this.restService.request<any, ProgramProjectActivityDto>({
      method: 'GET',
      url: `/api/app/program-project-activity/${id}`,
    },
    { apiName: this.apiName });
  

  getList = (input: ProgramProjectActivityGetListInput) =>
    this.restService.request<any, PagedResultDto<ProgramProjectActivityDto>>({
      method: 'GET',
      url: '/api/app/program-project-activity',
      params: { keyPerformanceId: input.keyPerformanceId, code: input.code, name: input.name, description: input.description, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });
  

  update = (id: string, input: CreateUpdateProgramProjectActivityDto) =>
    this.restService.request<any, ProgramProjectActivityDto>({
      method: 'PUT',
      url: `/api/app/program-project-activity/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
