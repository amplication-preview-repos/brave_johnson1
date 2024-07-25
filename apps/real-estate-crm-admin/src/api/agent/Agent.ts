import { Appointment } from "../appointment/Appointment";

export type Agent = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string | null;
  phone: string | null;
  name: string | null;
  appointments?: Array<Appointment>;
};
