'use client'

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import { useRouter } from "next/navigation"
import { FormEvent, useRef } from "react"

const SearchBox = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const search = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const searchTerm = inputRef.current?.value
		if (searchTerm) {
			router.push(`/user?search=${searchTerm}`)
		}
	}

  return (
    <form
				onSubmit={search}
				className='flex flex-wrap items-center justify-center rounded-2xl bg-offWhite py-2 pl-4 pr-2 shadow-lg dark:bg-faintingLight md:gap-6 md:py-3 md:pl-8 md:pr-3'>
				<MagnifyingGlassIcon className='h-5 w-5 text-blueSparkle md:h-6 md:w-6' />
				<input
					ref={inputRef}
					type='text'
					placeholder='Search GitHub username...'
					className='flex-1 truncate border-none bg-inherit text-sm text-[#222731] caret-blueSparkle placeholder:text-sanMarino focus:ring-0 active:ring-0 dark:text-white dark:placeholder:text-white md:text-lg'
				/>
				<button
					type='submit'
					className='rounded-xl bg-blueSparkle px-4 py-3 text-sm font-bold text-white hover:bg-[#60ABFF] md:text-base'>
					Search
				</button>
			</form>
  )
}
export default SearchBox