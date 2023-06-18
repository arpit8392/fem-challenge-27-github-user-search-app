import capitalize from '@/lib/capitalize'

type Props = {
	stats: {
		repos: number
		followers: number
		following: number
	}
}
const Stats = ({ stats }: Props) => {
	return (
		<div className='grid grid-cols-3 rounded-lg bg-ghostWhite px-4 py-5 dark:bg-offBlack md:px-8'>
			{Object.entries(stats).map((item, index) => (
				<div
					key={index}
					className='flex flex-col items-center gap-2 md:items-start'>
					<p className='text-xs text-sanMarino dark:text-white md:text-sm'>
						{capitalize(item[0])}
					</p>
					<p className='font-bold text-anchorsAweigh dark:text-white md:text-2xl'>
						{item[1]}
					</p>
				</div>
			))}
		</div>
	)
}
export default Stats
