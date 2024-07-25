import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type AppointmentCreateInput = {
  date?: Date | null;
  notes?: string | null;
  agent?: AgentWhereUniqueInput | null;
  property?: PropertyWhereUniqueInput | null;
  client?: ClientWhereUniqueInput | null;
};
