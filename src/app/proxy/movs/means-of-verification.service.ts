import type { CreateUpdateMeansOfVerificationDto, MeansOfVerificationDto, MeansOfVerificationGetListInput } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MeansOfVerificationService {
  apiName = 'Default';
  

  create = (input: CreateUpdateMeansOfVerificationDto) =>
    this.restService.request<any, MeansOfVerificationDto>({
      method: 'POST',
      url: '/api/app/means-of-verification',
      body: input,
    },
    { apiName: this.apiName });
  

  delete = (id: number) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/means-of-verification/${id}`,
    },
    { apiName: this.apiName });
  

  get = (id: number) =>
    this.restService.request<any, MeansOfVerificationDto>({
      method: 'GET',
      url: `/api/app/means-of-verification/${id}`,
    },
    { apiName: this.apiName });
  

  getList = (input: MeansOfVerificationGetListInput) =>
    this.restService.request<any, PagedResultDto<MeansOfVerificationDto>>({
      method: 'GET',
      url: '/api/app/means-of-verification',
      params: { name: input.name, description: input.description, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });
  

  update = (id: number, input: CreateUpdateMeansOfVerificationDto) =>
    this.restService.request<any, MeansOfVerificationDto>({
      method: 'PUT',
      url: `/api/app/means-of-verification/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
