import { ChangeEvent, useContext, useState, useEffect } from 'react';
import { fetchGithubUsers } from '../../api/github/index';
import { GithubContext } from '../../context/Github/GithubContext';
import { ActionTypes } from '../../context/Github/githubActions';

export default function useSearchInput() {
	const context = useContext(GithubContext);
	const [searchInput, setSearchInput] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>('');
	const apiRequestCount: string = 'apiRequestCount';
	const maxApiRatePerHour: number = 60;
	const hasError = error.length > 0;

	function setInitialLocalStorageValues() {
		const now = new Date();
		const item = {
			count: 0,
			expiry: now.getTime() + 60 * 60 * 1000,
		};
		localStorage.setItem(apiRequestCount, JSON.stringify(item));
	}

	function populateLocalStorage() {
		const apiRequestCountExists = localStorage.getItem(apiRequestCount);
		if (!apiRequestCountExists) {
			setInitialLocalStorageValues();
		}
	}

	useEffect(() => {
		populateLocalStorage();
	}, []);

	async function searchUsers(username: string) {
		try {
			setIsLoading(true);
			const currentRequestState = localStorage.getItem(apiRequestCount);

			if (currentRequestState) {
				const { count, expiry } = JSON.parse(currentRequestState);
				const now = new Date();
				// Less than 60mn and 60 calls = fetch users
				if (now.getTime() <= expiry && count < maxApiRatePerHour) {
					setIsLoading(true);
					const searchResponse = await fetchGithubUsers(username);
					setError(searchResponse.error || "");
					context?.dispatch({
						type: ActionTypes.SET_GITHUB_USERS,
						payload: searchResponse,
					});
				}
				// Less than 60mn and more than 60 calls = show error message
				if (now.getTime() <= expiry && count === maxApiRatePerHour) {
					const remainingMinutes = Math.abs(now.getTime() - expiry);
					setError(
						`Github API call rate reached. Try again in ${remainingMinutes}`,
					);
				}
				// More than 60mn = fetch users
				if (now.getTime() <= expiry) {
					setIsLoading(true);
					const searchResponse = await fetchGithubUsers(username);
					setError(searchResponse.error || "");
					context?.dispatch({
						type: ActionTypes.SET_GITHUB_USERS,
						payload: searchResponse,
					});
				}
				if (now.getTime() > expiry) {
					localStorage.removeItem(apiRequestCount);
					populateLocalStorage();
				}

				setIsLoading(false);
			}
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
		setError('The App Context must be used within a GithubContextProvider');
	}

	return { handleSearchChange, isLoading, error, hasError };
}
