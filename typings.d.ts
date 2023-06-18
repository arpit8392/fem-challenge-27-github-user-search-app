interface GitHubUser {
	login: string
	id: number
	avatar_url: string
	name?: string
	company?: string
	location?: string
	email?: string
	bio?: string
	twitter_username?: string
	public_repos: number
	followers: number
	following: number
	created_at: string
}
