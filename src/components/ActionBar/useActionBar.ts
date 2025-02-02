import { useContext } from 'react';
import { GithubContext } from '../../context/Github/GithubContext';
import { ActionTypes } from '../../context/Github/githubActions';
import { GithubUser } from '../../types/github';

export default function useActionBar() {
	const context = useContext(GithubContext);
	const selectedCount = context?.state.selectedCount || 0;
	const userCount = context?.state.totalCount || 0;

	function handleDeployClick() {
		console.log('deploy');
	}
	function handleDuplicateClick() {
		if (context?.state.users) {
			const newUsers: GithubUser[] = [];
			context.state.users.forEach((user) => {
				if (user.selected) {
					newUsers.push({
						...user,
						selected: false,
					});
					newUsers.push({
						...user,
						selected: false,
						id: Number(`${user.id}${Date.now()}`),
					});
				} else {
					newUsers.push(user);
				}
			});
			context?.dispatch({
				type: ActionTypes.DUPLICATE_GITHUB_USERS,
				payload: { users: newUsers, totalCount: newUsers.length },
			});
		}
	}
	function handleDeleteClick() {
		if (context?.state.users) {
			const newUsers: GithubUser[] = [];
			context.state.users.forEach((user) => {
				if (!user.selected) {
					newUsers.push(user);
				}
			});
			context?.dispatch({
				type: ActionTypes.DUPLICATE_GITHUB_USERS,
				payload: { users: newUsers, totalCount: newUsers.length },
			});
		}
	}
	return {
		handleDeployClick,
		handleDuplicateClick,
		handleDeleteClick,
		selectedCount,
		userCount,
	};
}
