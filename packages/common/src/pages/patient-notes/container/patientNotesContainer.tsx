import React, { useCallback, useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

import { IPatientNotes, ICreatePatientNotes } from '../../../models';
import PatientNotesScreen from '../presentation/patientNotes';
import { PatientNotesHook } from '../../../common-hooks';
import { GetPatientId } from '../../../helper-methods';
interface PatientNotesContainerprops {
	isLightMode?: boolean;
}
export const PatientNotesContainer = (props: PatientNotesContainerprops) => {
	const patient_id: number = GetPatientId();
	const {
		patientNotesData,
		fetchPatientNotes,
		queryString,
		setQueryString,
		gridCount,
		setIsLoading,
		isLoading,
	} = PatientNotesHook(patient_id);
	const [isEditMode, setIsEditMode] = useState(false);
	const [isModalState, setIsModalState] = useState(false);
	const [isBtnDisable, setIsBtnDisable] = useState(false);
	const [currentNotes, setCurrentNotes] = useState<IPatientNotes | null>();
	const [gridSize, setGridSize] = useState(10);

	const openModal = () => {
		setIsModalState(true);
	};

	const closeModal = () => {
		setIsModalState(false);
		setCurrentNotes(null);
		setIsEditMode(false);
	};

	const handleEdit = (row: IPatientNotes) => {
		setCurrentNotes(row);
		openModal();
	};


	useEffect(() => {
		// This effect will triggered to fetch notes subject options
	}, [isModalState]);
	return (
		<PatientNotesScreen
			patientNotesData={patientNotesData ? patientNotesData : []}

		/>
	);
};
