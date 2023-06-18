import { DateTime } from 'luxon'

const normalizeDate = (dateString: string): string => {
	const date = DateTime.fromISO(dateString, { zone: 'utc' })
	const formattedDate = date.toFormat('dd LLL yyyy')

	return formattedDate
}

export default normalizeDate
