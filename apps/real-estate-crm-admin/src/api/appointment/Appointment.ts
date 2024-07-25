import { Agent } from "../agent/Agent";
import { Property } from "../property/Property";
import { Client } from "../client/Client";

export type Appointment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  date: Date | null;
  notes: string | null;
  agent?: Agent | null;
  property?: Property | null;
  client?: Client | null;
};
