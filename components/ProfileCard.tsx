import Image from 'next/image'
import clsx from 'clsx'
import Stats from './Stats'
import Details from './Details'
import normalizeDate from '@/lib/normalizeDate'

const ProfileCard = async (data: GitHubUser) => {
	const {
		avatar_url,
		login,
		bio,
		created_at,
		name,
		company,
		location,
		email,
		twitter_username,
		public_repos,
		followers,
		following,
	} = data

	return (
		<section className='flex flex-col gap-8 rounded-2xl bg-white px-6 py-8 shadow-lg dark:bg-faintingLight md:gap-10 md:p-10 lg:p-12 '>
			<figure className='flex items-center gap-5 md:gap-6 lg:items-start '>
				<Image
					src={avatar_url}
					alt={login}
					width={70}
					height={70}
					className='block rounded-full object-contain md:hidden'
				/>
				<Image
					src={avatar_url}
					alt={login}
					width={117}
					height={117}
					className='hidden rounded-full object-contain md:block'
				/>
				<figcaption className='flex flex-col gap-[6px] lg:flex-row'>
					<div className='flex flex-col gap-[0.5px] lg:gap-[2px]'>
						<h2 className='font-bold tracking-wider text-anchorsAweigh dark:text-white md:text-2xl'>
							{name}
						</h2>
						<p className='text-sm text-blueSparkle md:text-base'>{`@${data.login}`}</p>
					</div>
					<p className='text-sm text-searchingBlue dark:text-white md:text-base'>{`Joined ${normalizeDate(
						created_at
					)}`}</p>
				</figcaption>
			</figure>
			<p
				className={clsx(
					'text-sm leading-7 tracking-wide text-searchingBlue dark:text-white md:text-base md:leading-8',
					!bio && 'opacity-75'
				)}>
				{bio || 'This profile has no bio'}
			</p>
			<div className='flex flex-col gap-6 '>
				<Stats
					stats={{
						repos: public_repos,
						following: following,
						followers: followers,
					}}
				/>
				<Details
					details={{
						location: location,
						email: email,
						twitter: twitter_username,
						company: company,
					}}
				/>
			</div>
		</section>
	)
}
export default ProfileCard
