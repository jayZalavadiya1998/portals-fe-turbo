export interface IPatientNotes {
  id: number;
  note_text: string;
  created_by_name: string;
  updated_by_name: string;
  subject_name: string;
  subject_id: number;
  is_editable: boolean;
  message: string;
}

export interface ICreatePatientNotes {
  id: number;
  subject_id: number;
  patient_id: number;
  note_text: string;
}