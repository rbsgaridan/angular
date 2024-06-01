import type { CreateUpdateDocumentStatusDto, DocumentStatusDto, DocumentStatusGetListInput } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DocumentStatusService {
  apiName = 'Default';
  

  create = (input: CreateUpdateDocumentStatusDto) =>
    this.restService.request<any, DocumentStatusDto>({
      method: 'POST',
      url: '/api/app/document-status',
      body: input,
    },
    { apiName: this.apiName });
  

  delete = (id: number) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/document-status/${id}`,
    },
    { apiName: this.apiName });
  

  get = (id: number) =>
    this.restService.request<any, DocumentStatusDto>({
      method: 'GET',
      url: `/api/app/document-status/${id}`,
    },
    { apiName: this.apiName });
  

  getList = (input: DocumentStatusGetListInput) =>
    this.restService.request<any, PagedResultDto<DocumentStatusDto>>({
      method: 'GET',
      url: '/api/app/document-status',
      params: { name: input.name, description: input.description, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });
  

  update = (id: number, input: CreateUpdateDocumentStatusDto) =>
    this.restService.request<any, DocumentStatusDto>({
      method: 'PUT',
      url: `/api/app/document-status/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
