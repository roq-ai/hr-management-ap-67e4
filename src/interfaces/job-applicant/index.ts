import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface JobApplicantInterface {
  id?: string;
  application_date: any;
  position_applied: string;
  resume: string;
  status: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface JobApplicantGetQueryInterface extends GetQueryInterface {
  id?: string;
  position_applied?: string;
  resume?: string;
  status?: string;
  user_id?: string;
}
