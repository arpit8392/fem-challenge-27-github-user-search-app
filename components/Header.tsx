import SearchBox from './SearchBox'
import DarkModeButton from './DarkModeButton'

const Header = () => {
	return (
		<header className='flex flex-col gap-9'>
			<div className='flex items-center justify-between'>
				<h1 className='text-2xl font-bold lowercase tracking-wide text-[#222731] dark:text-white '>
					Devfinder
				</h1>
				<DarkModeButton />
			</div>
			<SearchBox />
		</header>
	)
}
export default Header
