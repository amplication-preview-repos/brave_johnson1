import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type AppointmentWhereInput = {
  id?: StringFilter;
  date?: DateTimeNullableFilter;
  notes?: StringNullableFilter;
  agent?: AgentWhereUniqueInput;
  property?: PropertyWhereUniqueInput;
  client?: ClientWhereUniqueInput;
};
