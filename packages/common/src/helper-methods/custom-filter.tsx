export default function CustomFilterStateManage(
	queryString: any,
	field: any,
	operator: any,
	event: any
) {
	const updatedFilters = [...queryString.filter.filters]

	const existingFilterIndex = updatedFilters.findIndex(
		(filter) => filter.filters[0].field === field
	)
	let formattedDate = ''
	if (!event?.target?.value) {
		const dateObject = new Date(event)
		const year = dateObject.getFullYear()
		const month = String(dateObject.getMonth() + 1).padStart(2, '0')
		const day = String(dateObject.getDate()).padStart(2, '0')
		formattedDate = `${year}-${month}-${day}`
	}

	if (existingFilterIndex !== -1) {
		updatedFilters[existingFilterIndex].filters[0] = {
			field: field,
			operator: operator,
			value: event?.target?.value
				? event.target.value
				: event?.target?.value === ''
				? ''
				: formattedDate,
		}
	} else {
		updatedFilters.push({
			logic: 'or',
			filters: [
				{
					field: field,
					operator: operator,
					value: event?.target?.value
						? event.target.value
						: event?.target?.value === ''
						? ''
						: formattedDate,
				},
			],
		})
	}

	const filteredFilters = updatedFilters.filter(
		(filter) => filter.filters[0].value !== ''
	)

	return filteredFilters
}
