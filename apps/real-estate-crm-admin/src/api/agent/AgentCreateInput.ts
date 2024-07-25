import { AppointmentCreateNestedManyWithoutAgentsInput } from "./AppointmentCreateNestedManyWithoutAgentsInput";

export type AgentCreateInput = {
  email?: string | null;
  phone?: string | null;
  name?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutAgentsInput;
};
