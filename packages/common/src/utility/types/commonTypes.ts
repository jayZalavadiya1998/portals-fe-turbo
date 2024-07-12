import { ColumnDef } from "@tanstack/react-table";

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

export type CustomColumnDef<TData> = ColumnDef<TData> & {
	toFilter?: boolean;
	searchType?: string;
	operator?: string;
	headerName?: string;
  };