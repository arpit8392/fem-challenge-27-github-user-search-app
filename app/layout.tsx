import './globals.css'
import { Space_Mono } from 'next/font/google'
import ThemeProvider from '@/components/ThemeProvider'
import Header from '@/components/Header'

const space_mono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
	title: 'Github User Search App',
	description:
		'Frontend Mentor Challenge | Github User Search App | Solved by Arpit Namdev | Developed using Next JS, Tailwind CSS and many more...',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={`${space_mono.className} bg-ghostWhite transition-all duration-700 dark:bg-offBlack`}>
				<ThemeProvider enableSystem={true} attribute='class'>
					<div className='mx-auto flex flex-col gap-4 px-6 py-8 md:max-w-xl md:gap-6 md:py-36 lg:max-w-3xl'>
						<Header />
						{children}
					</div>
				</ThemeProvider>
			</body>
		</html>
	)
}
