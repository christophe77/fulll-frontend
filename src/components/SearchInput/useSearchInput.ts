import { ChangeEvent, useContext, useState, useEffect } from 'react';
import { fetchGithubUsers } from '../../api/github/index';
import { GithubContext } from '../../context/Github/GithubContext';
import { ActionTypes } from '../../context/Github/githubActions';

export default function useSearchInput() {
	const context = useContext(GithubContext);

	const [searchInput, setSearchInput] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>('');

	const hasError = error.length > 0;

	async function searchUsers(username: string) {
		try {
			setIsLoading(true);
			const searchResponse = await fetchGithubUsers(username);
			context?.dispatch({
				type: ActionTypes.SET_GITHUB_USERS,
				payload: searchResponse,
			});
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			setError(String(error));
		} 
	}

	useEffect(() => {
		if (searchInput) {
			const delayInputTimeoutId = setTimeout(() => {
				searchUsers(searchInput);
			}, 500);
			return () => clearTimeout(delayInputTimeoutId);
		}
	}, [searchInput]);

	function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
		const newSearchInput = event.target.value;
		setSearchInput(newSearchInput);
	}

	if (!context) {
		setError('The App Context must be used within a GithubContextProvider')
	}

	return { handleSearchChange, isLoading, error, hasError };
}
