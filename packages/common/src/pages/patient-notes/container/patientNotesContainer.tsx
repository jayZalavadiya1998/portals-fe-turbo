import PatientNotesScreen from '../presentation/patientNotes';
import { PatientNotesHook } from '../../../common-hooks';
import { GetPatientId } from '../../../helper-methods';
import { IQueryString } from '../../../utility';
import { useCallback } from 'react';
import CustomFilterStateManage from '../../../helper-methods/custom-filter';

export const PatientNotesContainer = () => {
	const patient_id: number = GetPatientId();
	const {
		patientNotesData,
		setQueryString,
		queryString
	} = PatientNotesHook(patient_id);

	const handleFilterChange = (field: string, operator: string, event: any) => {
		const filteredData = CustomFilterStateManage(
			queryString,
			field,
			operator,
			event
		)
		setQueryString((prevState: IQueryString) => ({
			...prevState,
			filter: {
				...prevState.filter,
				filters: filteredData,
			},
		}))
	}

	const handleGridChange = useCallback(
		(event: any) => {
			setQueryString((prevState: IQueryString) => {
				if (
					prevState.skip ===
					event.pageIndex *
					event.pageSize &&
					prevState.take === event.pageSize
				) {
					return prevState
				}

				return {
					...prevState,
					skip:
						event.pageIndex *
						event.pageSize,
					take: event.pageSize,
				}
			})
		},
		[setQueryString]
	)

	return (
		<PatientNotesScreen
			patientNotesData={patientNotesData ? patientNotesData : []}
			handleGridChange={handleGridChange}
			handleFilterChange={handleFilterChange}
		/>
	);
};
