import svgs from '@/data'
import { createMarkup } from '@/lib/createMarkup'
import clsx from 'clsx'

type Props = {
	details: {
		location?: string
		email?: string
		twitter?: string
		company?: string
	}
}

type SVGKey = keyof typeof svgs

const getSVG = (key: string): string => {
	return svgs.hasOwnProperty(key as SVGKey) ? svgs[key as SVGKey] : ''
}

const Details = ({ details }: Props) => {
	return (
		<div className='grid grid-flow-row-dense grid-cols-1 content-center gap-4 md:grid-cols-2 md:gap-5'>
			{Object.entries(details).map((item, index) => (
				<div
					key={index}
					className={clsx('flex gap-5', !item[1] && 'opacity-50')}>
					<svg
						className='fill-sanMarino dark:fill-white'
						height='20'
						width='20'
						aria-hidden={true}
						focusable={false}
						xmlns='http://www.w3.org/2000/svg'>
						<g dangerouslySetInnerHTML={createMarkup(getSVG(item[0]))} />
					</svg>
					<span className='text-sm text-sanMarino dark:text-white md:text-base'>
						{item[1] || 'Not Available'}
					</span>
				</div>
			))}
		</div>
	)
}
export default Details
