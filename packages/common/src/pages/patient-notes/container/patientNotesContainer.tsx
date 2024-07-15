import PatientNotesScreen from '../presentation/patientNotes';
import { PatientNotesHook } from '../../../common-hooks';
import { GetPatientId } from '../../../helper-methods';
import { IQueryString, PatientNotesService } from '../../../utility';
import { useCallback, useState } from 'react';
import CustomFilterStateManage from '../../../helper-methods/custom-filter';
import { ICreatePatientNotes } from '../presentation/types';
import { toast } from 'sonner';

export const PatientNotesContainer = () => {
	const patient_id: number = GetPatientId();
	const {
		patientNotesData,
		fetchPatientNotes,
		setQueryString,
		queryString
	} = PatientNotesHook(patient_id)
	const [isEdit, setIsEdit] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
	const [isBtnDisable, setIsBtnDisable] = useState<boolean>(false)
	const [sheetOpen, setSheetOpen] = useState<boolean>(false);

	const closeSheet = () => {
		setSheetOpen(false)
	}

	const openSheet = () => {
		setSheetOpen(true)
	}

	const handleSubmit = async (formData: ICreatePatientNotes) => {
		setIsBtnDisable(true)
		try {
			setIsLoading(true)
			if (isEdit) {
				// const response = await PatientNotesService.updatePatientNote(
				// 	currentNotes!.id,
				// 	{
				// 		...formData,
				// 		id: currentNotes!.id,
				// 	}
				// )
				// response?.message && customToaster.success(response?.message)
				// fetchPatientNotes(patient_id, queryString)
				closeSheet()
			} else {
				const response = await PatientNotesService.createPatientNote({
					...formData,
					patient_id: patient_id,
				})
				toast.success(response?.message)
				fetchPatientNotes(patient_id, queryString)
				closeSheet()
			}
		} catch (error: any) {
			if (error?.data?.state === 'error' || error?.data?.state == 'exception') {
				if (typeof error?.data?.error === 'object') {
					// Object.keys(error?.data?.error).forEach((key) => {
					// 	customToaster.error(error?.data?.error[key])
					// })
				} else {
					// error?.data?.error && customToaster.error(error?.data?.error)
					// error?.data?.message && customToaster.error(error?.data?.message)
				}
			} else {
				// error?.data?.error && customToaster.error(error?.data?.error)
				// error?.data?.message && customToaster.error(error?.data?.message)
			}
		} finally {
			setIsLoading(false)
			setIsBtnDisable(false)
		}
	}

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
			isEdit={isEdit}
			setIsEdit={setIsEdit}
			isLoading={isLoading}
			setIsLoading={setIsLoading}
			isBtnDisable={isBtnDisable}
			setIsBtnDisable={setIsBtnDisable}
			sheetOpen={sheetOpen}
			openSheet={openSheet}
			handleSubmit={handleSubmit}
		/>
	);
};
