import type { CreateUpdateRatingPeriodDto, RatingPeriodDto, RatingPeriodGetListInput } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RatingPeriodService {
  apiName = 'Default';
  

  create = (input: CreateUpdateRatingPeriodDto) =>
    this.restService.request<any, RatingPeriodDto>({
      method: 'POST',
      url: '/api/app/rating-period',
      body: input,
    },
    { apiName: this.apiName });
  

  delete = (id: number) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/rating-period/${id}`,
    },
    { apiName: this.apiName });
  

  get = (id: number) =>
    this.restService.request<any, RatingPeriodDto>({
      method: 'GET',
      url: `/api/app/rating-period/${id}`,
    },
    { apiName: this.apiName });
  

  getList = (input: RatingPeriodGetListInput) =>
    this.restService.request<any, PagedResultDto<RatingPeriodDto>>({
      method: 'GET',
      url: '/api/app/rating-period',
      params: { description: input.description, start: input.start, end: input.end, isActive: input.isActive, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });
  

  update = (id: number, input: CreateUpdateRatingPeriodDto) =>
    this.restService.request<any, RatingPeriodDto>({
      method: 'PUT',
      url: `/api/app/rating-period/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
