import { CarInterface } from 'interfaces/car';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OperationInterface {
  id?: string;
  operation_type: string;
  car_id: string;
  operation_status: string;
  start_time: any;
  end_time: any;
  staff_id: string;
  created_at?: any;
  updated_at?: any;

  car?: CarInterface;
  user?: UserInterface;
  _count?: {};
}

export interface OperationGetQueryInterface extends GetQueryInterface {
  id?: string;
  operation_type?: string;
  car_id?: string;
  operation_status?: string;
  staff_id?: string;
}
