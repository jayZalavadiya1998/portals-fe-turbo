import { useEffect } from 'react';
import { IPatientNotes } from '../../../models/patientNotes';
import {DataTable} from "@repo/ui/shadcn"
import { notesColumns } from './notesColums';
interface IPatientNotesProps {
	patientNotesData: IPatientNotes[];

}

const PatientNotesScreen = (props: IPatientNotesProps) => {

	useEffect(() => {
	}, [props.patientNotesData]);

	return (
		<>
				<div
					style={{
						width: '100%',
						padding: '20px',
						boxSizing: "border-box",
						height: 'calc(100vh - 4rem)',

					}}
				>
					<div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
						Notes		
					</div>

					<DataTable data={props.patientNotesData} columns={notesColumns}/>
					
				</div>
			
		</>
	);
};

export default PatientNotesScreen