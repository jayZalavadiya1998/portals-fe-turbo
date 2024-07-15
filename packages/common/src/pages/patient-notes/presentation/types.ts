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
  subject_id: number;
  patient_id?: number;
  note_text?: string;
}

export interface INotesCommonProps {
  isEdit: boolean
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>
  handleSubmit: (formData: ICreatePatientNotes) => void
  isLoading: boolean
  setIsLoading : React.Dispatch<React.SetStateAction<boolean>>
  isBtnDisable : boolean
  setIsBtnDisable : React.Dispatch<React.SetStateAction<boolean>>
  sheetOpen: boolean
  openSheet: () => void
}
