import type { CreateUpdatePmapsTimeLogDto, PmapsTimeLogDto, PmapsTimeLogGetListInput } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PmapsTimeLogService {
  apiName = 'Default';
  

  create = (input: CreateUpdatePmapsTimeLogDto) =>
    this.restService.request<any, PmapsTimeLogDto>({
      method: 'POST',
      url: '/api/app/pmaps-time-log',
      body: input,
    },
    { apiName: this.apiName });
  

  delete = (id: number) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/pmaps-time-log/${id}`,
    },
    { apiName: this.apiName });
  

  get = (id: number) =>
    this.restService.request<any, PmapsTimeLogDto>({
      method: 'GET',
      url: `/api/app/pmaps-time-log/${id}`,
    },
    { apiName: this.apiName });
  

  getList = (input: PmapsTimeLogGetListInput) =>
    this.restService.request<any, PagedResultDto<PmapsTimeLogDto>>({
      method: 'GET',
      url: '/api/app/pmaps-time-log',
      params: { employeeId: input.employeeId, periodFrom: input.periodFrom, periodTo: input.periodTo, logType: input.logType, userId: input.userId, machineId: input.machineId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });
  

  update = (id: number, input: CreateUpdatePmapsTimeLogDto) =>
    this.restService.request<any, PmapsTimeLogDto>({
      method: 'PUT',
      url: `/api/app/pmaps-time-log/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
