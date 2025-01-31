import { GithubSearchUsersResponse } from '../../types/github';

const baseUrl = 'https://api.github.com';
const headers = {
	'X-GitHub-Api-Version': '2022-11-28',
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
		throw new Error(`Response status: ${response.status}`);
	}
	const serializedResponse: GithubSearchUsersResponse = await response.json();
	return serializedResponse;
}
