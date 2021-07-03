import { Schema } from 'mongoose';

const EmployeeSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  position: { type: String, required: true },
  office: { type: String, required: true },
  salary: { type: Number, required: true },
});

export default EmployeeSchema;
