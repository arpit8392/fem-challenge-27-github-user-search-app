import ProfileCard from '@/components/ProfileCard'
import fetchProfile from '@/lib/fetchProfile'

type Props = {
	searchParams: {
		search: string
	}
}
const page = async ({ searchParams: { search } }: Props) => {
	const data = await fetchProfile(search)
	if (data) {
		return <ProfileCard {...data} />
	} else {
		return (
			<h2 className='flex items-center justify-center font-bold p-4 text-4xl tracking-wider text-[#F74646] dark:text-white'>
				No such user found!!!
			</h2>
		)
	}
}
export default page
