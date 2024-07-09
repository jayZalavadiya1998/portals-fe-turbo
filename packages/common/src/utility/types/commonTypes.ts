interface QueryStringFilter {
	field: string;
	value: string;
	operator: string;
}

export interface IQueryString {
	filter: {
		filters: QueryStringFilter[];
		logic: 'and' | 'or';
	};
	skip: number | string;
	take: number | string;
}