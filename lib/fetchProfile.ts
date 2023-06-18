const fetchProfile = async (username: string) => {
	try {
		const response = await fetch(`https://api.github.com/users/${username}`, {
			headers: {
				Accept: 'application/vnd.github+json',
				Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
				'X-GitHub-Api-Version': '2022-11-28',
			},
			next: {
				revalidate: 3600,
			},
		})
		if (response.status === 404) {
			throw new Error('User not found')
		}
		const data = await response.json()

		return data
	} catch (error) {
		console.error(error)
	}
}

export default fetchProfile
