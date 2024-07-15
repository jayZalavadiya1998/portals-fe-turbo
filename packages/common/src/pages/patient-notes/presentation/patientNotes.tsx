import {Button, DataTable, Icons} from "@repo/ui/shadcn";
import { notesColumns } from './notesColumns';
import FilterFields from '../../../../../ui/src/components/filter-fields';
import { useState } from 'react';
import { AddPatientNotes } from './addPatientNotes';
import { INotesCommonProps, IPatientNotes } from './types';
interface IPatientNotesProps extends INotesCommonProps{
	patientNotesData: IPatientNotes[];
	handleGridChange: (event:any) => void;
	handleFilterChange: (field: string, operator: string, event: any) => void;
}

const PatientNotesScreen = (props: IPatientNotesProps) => {
	const [filterOpen, setFilterOpen] = useState<boolean>(true);
	console.log("hey =", filterOpen)
	return (
		<div
			className='flex flex-col p-0 m-0 gap-4 w-full h-full'
		>
			<div className='flex gap-4 justify-content items-center text-lg font-bold'>
				Notes		
				<div className='flex gap-1'>
					<Button variant="secondary" size="sm" className="flex gap-1" onClick={props.openSheet}>
						Add
					</Button>

					<Button variant="ghost" size="sm" className="flex gap-1" onClick={() => setFilterOpen(!filterOpen)}>
						<Icons.listFilter className="h-4 w-4" />
					</Button>
				</div>				
			</div>
			
			{filterOpen
				?
					<FilterFields
						filterOpen={filterOpen}
						handleFilterChange={props.handleFilterChange}
						listColumns={notesColumns}
						options={[]}
					/>
				:
					''
			}

			<AddPatientNotes
				sheetOpen={props.sheetOpen}
				openSheet={props.openSheet}
				isEdit={props.isEdit}
				setIsEdit={props.setIsEdit}
				isLoading={props.isLoading}
				setIsLoading={props.setIsLoading}
				isBtnDisable={props.isBtnDisable}
				setIsBtnDisable={props.setIsBtnDisable}
				handleSubmit={props.handleSubmit}
			/>

			<DataTable
				data={props.patientNotesData}
				columns={notesColumns}
				toolbar={false}
				handleGridChange={props.handleGridChange}
			/>
		</div>
	);
};

export default PatientNotesScreen