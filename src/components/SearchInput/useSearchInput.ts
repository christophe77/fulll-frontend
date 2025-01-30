import { useContext, useEffect } from 'react';
import { fetchGithubUsers } from '../../api/github/index';
import { GithubContext } from '../../context/Github/GithubContext';
import { ActionTypes } from '../../context/Github/githubActions';
import { GithubSearchUsersResponse } from '../../types/github';

export default function useSearchInput() {
	const context = useContext(GithubContext);

	async function searchUsers(
		username: string,
	): Promise<GithubSearchUsersResponse> {
		const searchResponse = await fetchGithubUsers(username);
		context?.dispatch({
			type: ActionTypes.SET_GITHUB_USERS,
			payload: searchResponse,
		});
		return searchResponse;
	}

	useEffect(() => {
		console.log('search');
		searchUsers('christophe');
	}, []);

	if (!context) {
		throw new Error(
			'The App Context must be used within a GithubContextProvider',
		);
	}

	return { searchUsers };
}
