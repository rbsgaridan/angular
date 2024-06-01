import { mapEnumToOptions } from '@abp/ng.core';

export enum EmployeeGroup {
  Teaching = 1,
  NonTeaching = 2,
}

export const employeeGroupOptions = mapEnumToOptions(EmployeeGroup);
