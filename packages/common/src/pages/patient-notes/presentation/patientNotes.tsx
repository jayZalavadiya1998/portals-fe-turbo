import React, { useEffect, useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { ICreatePatientNotes, IPatientNotes } from '../../../models/patientNotes';
import { Toaster, toast } from 'react-hot-toast';
import { commonRegex } from '../../../utility';
import {DataTable} from "@repo/ui/shadcn"
import { notesColumns } from './notesColums';
interface IPatientNotesProps {
	patientNotesData: IPatientNotes[];

}

const PatientNotesScreen = (props: IPatientNotesProps) => {
	const temp: RegExp = new RegExp(/^\s/);

	const {
		register,
		formState: { errors },
		handleSubmit,
		control,
		reset,
		resetField,
		setValue,
	} = useForm();

	const [tableData, setTableData] = useState<IPatientNotes[]>([]);
	const [filterOpen, setFilterOpen] = useState<boolean>(true);

	useEffect(() => {
		setTableData(props.patientNotesData);
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