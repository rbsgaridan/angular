import { mapEnumToOptions } from '@abp/ng.core';

export enum EmploymentStatus {
  Permanent = 1,
  Temporary = 2,
  CasualNational = 3,
  CasualLocal = 4,
  Substitute = 5,
  ContractOfSercvice = 6,
  JobOrder = 7,
}

export const employmentStatusOptions = mapEnumToOptions(EmploymentStatus);
