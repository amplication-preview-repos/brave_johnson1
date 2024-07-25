import { AppointmentUpdateManyWithoutAgentsInput } from "./AppointmentUpdateManyWithoutAgentsInput";

export type AgentUpdateInput = {
  email?: string | null;
  phone?: string | null;
  name?: string | null;
  appointments?: AppointmentUpdateManyWithoutAgentsInput;
};
