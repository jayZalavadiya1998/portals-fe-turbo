import * as z from "zod"

export const addPatientNotesSchema = z.object({
    note_text: z.string().optional(),
   
});
