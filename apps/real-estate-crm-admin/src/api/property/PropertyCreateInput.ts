import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  address?: string | null;
  price?: number | null;
  description?: string | null;
  status?: "Option1" | null;
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
};
