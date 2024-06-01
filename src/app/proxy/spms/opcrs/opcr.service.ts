import type { CreateUpdateOpcrDto, OpcrDto, OpcrGetListInput } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OpcrService {
  apiName = 'Default';
  

  create = (input: CreateUpdateOpcrDto) =>
    this.restService.request<any, OpcrDto>({
      method: 'POST',
      url: '/api/app/opcr',
      body: input,
    },
    { apiName: this.apiName });
  

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/opcr/${id}`,
    },
    { apiName: this.apiName });
  

  get = (id: string) =>
    this.restService.request<any, OpcrDto>({
      method: 'GET',
      url: `/api/app/opcr/${id}`,
    },
    { apiName: this.apiName });
  

  getList = (input: OpcrGetListInput) =>
    this.restService.request<any, PagedResultDto<OpcrDto>>({
      method: 'GET',
      url: '/api/app/opcr',
      params: { orgUnitId: input.orgUnitId, orgUnit: input.orgUnit, headId: input.headId, head: input.head, description: input.description, ratingPeriodId: input.ratingPeriodId, ratingPeriod: input.ratingPeriod, finalQRating: input.finalQRating, finalErating: input.finalErating, finalTrating: input.finalTrating, finalAverageRating: input.finalAverageRating, adjectivalRating: input.adjectivalRating, targetReviewedById: input.targetReviewedById, targetReviewedBy: input.targetReviewedBy, targetReviewerDesignation: input.targetReviewerDesignation, targetDateReviewed: input.targetDateReviewed, targetAssessedById: input.targetAssessedById, targetAssessedBy: input.targetAssessedBy, targetAssessorDesignation: input.targetAssessorDesignation, targetDateAssessed: input.targetDateAssessed, targetApprovedById: input.targetApprovedById, targetApprovedBy: input.targetApprovedBy, targetApproverDesignation: input.targetApproverDesignation, targetDateApproved: input.targetDateApproved, accompReviewedById: input.accompReviewedById, accompReviewedBy: input.accompReviewedBy, accompReviewerDesignation: input.accompReviewerDesignation, accomptDateReviewed: input.accomptDateReviewed, accomptAssessedById: input.accomptAssessedById, accompAssessedBy: input.accompAssessedBy, accompAssessorDesignation: input.accompAssessorDesignation, accomptDateAssessed: input.accomptDateAssessed, accompApprovedById: input.accompApprovedById, accompApprovedBy: input.accompApprovedBy, accompApproverDesignation: input.accompApproverDesignation, accompDateApproved: input.accompDateApproved, dateLastPrinted: input.dateLastPrinted, previousHolder: input.previousHolder, previousHolderName: input.previousHolderName, currentHolder: input.currentHolder, currentHolderName: input.currentHolderName, nextUser: input.nextUser, nextUserName: input.nextUserName, documentStatusId: input.documentStatusId, status: input.status, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });
  

  update = (id: string, input: CreateUpdateOpcrDto) =>
    this.restService.request<any, OpcrDto>({
      method: 'PUT',
      url: `/api/app/opcr/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
