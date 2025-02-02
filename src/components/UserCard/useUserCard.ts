import { useContext } from 'react';
import { GithubContext } from '../../context/Github/GithubContext';
import { ActionTypes } from '../../context/Github/githubActions';
import { GithubUser } from '../../types/github';

export default function useUserCard() {
	const context = useContext(GithubContext);

	function handleViewProfileClick(url: string): void {
		window.open(url, '_blank');
	}

	function userNameToDisplay(userLogin: string): string {
		const maxLength = 10;
		return userLogin.length > maxLength
			? `${userLogin.slice(0, maxLength - 1)}[...]`
			: userLogin;
	}

	function handleUserCardCheckboxClick(user: GithubUser): void {
		const userIsSelected = user.selected || false;
		console.log(userIsSelected)
		context?.dispatch({
			type: ActionTypes.UPDATE_GITHUB_USER_SELECTION,
			payload: {
				userId: user.id,
				selected: !user.selected,
			},
		});
	}

	return {
		handleViewProfileClick,
		userNameToDisplay,
		handleUserCardCheckboxClick,
	};
}
