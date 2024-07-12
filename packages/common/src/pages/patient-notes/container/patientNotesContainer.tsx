import PatientNotesScreen from '../presentation/patientNotes';
import { PatientNotesHook } from '../../../common-hooks';
import { GetPatientId } from '../../../helper-methods';

export const PatientNotesContainer = () => {
	const patient_id: number = GetPatientId();
	const {
		patientNotesData,
	} = PatientNotesHook(patient_id);


	return (
		<PatientNotesScreen
			patientNotesData={patientNotesData ? patientNotesData : []}

		/>
	);
};
