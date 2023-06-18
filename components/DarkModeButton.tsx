'use client'

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const DarkModeButton = () => {
	const [mounted, setMounted] = useState(false)
	const { systemTheme, theme, setTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null

	const currentTheme = theme === 'systemTheme' ? systemTheme : theme

	const DarkButton = (
		<button
			className='flex items-center gap-x-4 text-sanMarino hover:text-[#222731]'
			onClick={() => setTheme('dark')}>
			<span className='text-sm uppercase tracking-[2.5px]'>Dark</span>
			<MoonIcon className='h-5 w-5' />
		</button>
	)

	const LightButton = (
		<button
			className='flex items-center gap-x-4 text-white hover:text-[#90A4D4]'
			onClick={() => setTheme('light')}>
			<span className='text-sm uppercase tracking-[2.5px]'>Light</span>
			<SunIcon className='h-5 w-5' />
		</button>
	)
	return <div>{currentTheme === 'dark' ? LightButton : DarkButton}</div>
}
export default DarkModeButton
