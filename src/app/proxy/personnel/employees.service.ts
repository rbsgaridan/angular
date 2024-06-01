import type { CreateEmployeeInput, GetEmployeeDto, GetEmployeeListDto, GetEmployeeListInput, UpdateEmployeeInput } from './employees/dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  apiName = 'Default';
  

  create = (input: CreateEmployeeInput) =>
    this.restService.request<any, GetEmployeeDto>({
      method: 'POST',
      url: '/api/app/employees',
      body: input,
    },
    { apiName: this.apiName });
  

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/employees/${id}`,
    },
    { apiName: this.apiName });
  

  get = (id: string) =>
    this.restService.request<any, GetEmployeeDto>({
      method: 'GET',
      url: `/api/app/employees/${id}`,
    },
    { apiName: this.apiName });
  

  getList = (input: GetEmployeeListInput) =>
    this.restService.request<any, PagedResultDto<GetEmployeeListDto>>({
      method: 'GET',
      url: '/api/app/employees',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });
  

  update = (id: string, input: UpdateEmployeeInput) =>
    this.restService.request<any, GetEmployeeDto>({
      method: 'PUT',
      url: `/api/app/employees/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
