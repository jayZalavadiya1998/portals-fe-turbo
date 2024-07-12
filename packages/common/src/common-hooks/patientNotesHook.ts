import { useEffect, useState } from 'react';
import { PatientNotesService } from '../utility/service/patientNotesService';
import { apiCallTime } from '../helper-methods';
import { IQueryString } from '../utility';

export const PatientNotesHook = (patientId: number) => {

	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const [patientNotesData, setPatientNotesData] = useState(null);
	const [gridCount, setGridCount] = useState(0);
	const [queryString, setQueryString] = useState<IQueryString>({
		filter: {
			filters: [],
			logic: 'and',
		},
		skip: 0,
		take: 10,
	});
	const fetchPatientNotes = async (patientId: number, search: IQueryString) => {
		try {
			setError('');
			setIsLoading(true);
			const result = await PatientNotesService.getPatientNotes(
				patientId,
				JSON.stringify(search)
			);
			setPatientNotesData(result?.results);
			setGridCount(result?.count);
		} catch (error: any) {
			// error?.data?.error && customToaster.error(error?.data?.error);
			// error?.data?.message && customToaster.error(error?.data?.message);
			setError(error?.data?.message || 'askjdhaskdhn');
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchPatientNotes(patientId, queryString);
		const intervalCall = setInterval(() => {
			fetchPatientNotes(patientId, queryString);
		}, apiCallTime);
		return () => clearInterval(intervalCall);
	}, [patientId, queryString.skip, queryString.filter.filters, queryString.take]);

	return {
		isLoading,
		patientNotesData,
		fetchPatientNotes,
		error,
		setIsLoading,
		queryString,
		setQueryString,
		gridCount,
	};
};
