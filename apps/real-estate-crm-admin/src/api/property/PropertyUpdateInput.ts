import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  address?: string | null;
  price?: number | null;
  description?: string | null;
  status?: "Option1" | null;
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
};
