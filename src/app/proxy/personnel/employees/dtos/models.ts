import type { EmployeeGroup } from '../../employee-group.enum';
import type { EmploymentStatus } from '../../employment-status.enum';
import type { EntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface CreateEmployeeInput {
  idNumber?: string;
  employeeGroup: EmployeeGroup;
  currentStatus: EmploymentStatus;
  lastname: string;
  firstname: string;
  middleName?: string;
  mi?: string;
  suffix?: string;
  birthDate?: string;
  sex: string;
  telephone?: string;
  mobileNumber?: string;
  emailAddress: string;
  inActive: boolean;
  currentPositionId: number;
  currentPosition?: string;
  currentPositionCode?: string;
  currentSalaryGradeId: number;
  currentSalaryGrade?: string;
  currentStepIncrement?: string;
  annualSalary: number;
  fullName?: string;
}

export interface GetEmployeeDto extends EntityDto<string> {
}

export interface GetEmployeeListDto extends EntityDto<string> {
  idNumber?: string;
  employeeGroup: EmployeeGroup;
  currentStatus: EmploymentStatus;
  lastname?: string;
  firstname?: string;
  middleName?: string;
  mi?: string;
  suffix?: string;
  sex?: string;
  telephone?: string;
  mobileNumber?: string;
  emailAddress?: string;
  inActive: boolean;
}

export interface GetEmployeeListInput extends PagedAndSortedResultRequestDto {
}

export interface UpdateEmployeeInput {
}
