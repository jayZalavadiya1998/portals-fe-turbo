import { z } from "zod";
import { userLoginSchema } from "./schema";

export type InputTypeLoginUser = z.infer<typeof userLoginSchema>;