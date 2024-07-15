import { useState } from 'react';
import { CommonService } from '../utility/service/commonService';
import { IOptions } from '../utility';

export const SubjectTypeOptionsHook = () => {
	const [loading, setLoading] = useState(true);
	const [subjectOptionsData, setSubjectOptionsData] = useState<IOptions[]>([]);

	const fetchData = async () => {
		try {
			setLoading(true);
			const result = await CommonService.getSubjectTypeOptions();
			setSubjectOptionsData(result.results);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	return { subjectOptionsData, fetchData, loading };
};
