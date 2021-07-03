import { Document } from 'mongoose';

export interface EmployeeEntity extends Document {
  name: string;
  email: string;
  password: string;
  position: string;
  office: string;
  salary: number;
}
