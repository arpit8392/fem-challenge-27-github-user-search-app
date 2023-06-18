import ProfileCard from '@/components/ProfileCard'
import fetchProfile from '@/lib/fetchProfile'

export default async function Home() {
	const data = await fetchProfile('octocat')

	return (
		<main>
			<ProfileCard {...data} />
		</main>
	)
}
