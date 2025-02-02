import { useContext } from 'react';
import { GithubContext } from '../../context/Github/GithubContext';
import { ActionTypes } from '../../context/Github/githubActions';
import { GithubUser } from '../../types/github';

export default function useUserCard() {
	const context = useContext(GithubContext);

	function handleViewProfileClick(url: string): void {
		window.open(url, '_blank');
	}

	function shortenString(stringToShorten: string): string {
		const maxLength = 10;
		return stringToShorten.length > maxLength
			? `${stringToShorten.slice(0, maxLength - 1)}[...]`
			: stringToShorten;
	}

	function handleUserCardCheckboxClick(user: GithubUser): void {
		if (context?.state.users) {
			const usersCopy = [...context.state.users];
			const userToUpdateIndex = usersCopy.findIndex(
				(githubUser) => githubUser.id === user.id,
			);
			const newSelectedState = !user.selected;
			usersCopy[userToUpdateIndex].selected = !user.selected;
			const newSelectedCount = newSelectedState
				? context.state.selectedCount + 1
				: context.state.selectedCount - 1;
			context?.dispatch({
				type: ActionTypes.UPDATE_GITHUB_USER_SELECTION,
				payload: { users: usersCopy, selectedCount: newSelectedCount },
			});
		}
	}

	return {
		handleViewProfileClick,
		shortenString,
		handleUserCardCheckboxClick,
	};
}
