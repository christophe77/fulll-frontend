import { GithubSearchUsersResponse } from '../../types/github';

const baseUrl = 'https://api.github.com';
const headers = {
	'X-GitHub-Api-Version': '2022-11-28',
};
const errorResponse: GithubSearchUsersResponse = {
	total_count: 0,
	selected_count: 0,
	incomplete_results: false,
	items: [],
	error: "error"
};
export async function fetchGithubUsers(
	username: string,
): Promise<GithubSearchUsersResponse> {
	// documentation : https://docs.github.com/fr/rest/search/search?apiVersion=2022-11-28#search-users
	// limitations : https://docs.github.com/en/rest/search/search?apiVersion=2022-11-28

	const query = `${username} in:name type:user`;
	const encodedQuery = encodeURIComponent(query);
	const response = await fetch(`${baseUrl}/search/users?q=${encodedQuery}`, {
		method: 'GET',
		headers,
	});
	if (!response.ok) {
		return {
			...errorResponse,
			error:`Response status error: ${response.status} : ${JSON.stringify(
				response,
			)}`,
		};
	}
	const serializedResponse: GithubSearchUsersResponse = await response.json();
	return serializedResponse;
}
