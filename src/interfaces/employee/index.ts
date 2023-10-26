import { EmployeeInterface } from 'interfaces/employee';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  hire_date: any;
  job_title: string;
  salary: number;
  department: string;
  report_to: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  other_employee?: EmployeeInterface[];
  employee?: EmployeeInterface;
  user?: UserInterface;
  _count?: {
    other_employee?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  job_title?: string;
  department?: string;
  report_to?: string;
  user_id?: string;
}
