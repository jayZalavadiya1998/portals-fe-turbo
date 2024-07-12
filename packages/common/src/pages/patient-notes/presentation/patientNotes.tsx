import { IPatientNotes } from '../../../models/patientNotes';
import {Button, DataTable, Icons} from "@repo/ui/shadcn"
import { notesColumns } from './notesColumns';
import FilterFields from '../../../../../ui/src/components/filter-fields';
import { useState } from 'react';
interface IPatientNotesProps {
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
			<div className='text-lg font-bold'>
				Notes		
			</div>
			<Button variant="outline" size="sm" className="flex gap-1" onClick={() => setFilterOpen(!filterOpen)}>
				<Icons.listFilter className="h-3.5 w-3.5" />
				<span className="">
				Filter
				</span>
			</Button>
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