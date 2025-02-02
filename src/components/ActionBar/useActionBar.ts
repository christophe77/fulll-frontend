import { useContext, useState } from 'react';
import { GithubContext } from '../../context/Github/GithubContext';
import { ActionTypes } from '../../context/Github/githubActions';
import { GithubUser } from '../../types/github';

export default function useActionBar() {
	const context = useContext(GithubContext);
	const selectedCount = context?.state.selectedCount || 0;
	const userCount = context?.state.totalCount || 0;

	const [allIsSelected, setAllIsSelected] = useState<boolean>(false);

	function handleSelectAllClick(): void {
		if (context?.state.users) {
			const newUsers: GithubUser[] = [];
			context.state.users.forEach((user) => {
				if (allIsSelected) {
					newUsers.push({ ...user, selected: false });
				} else {
					newUsers.push({ ...user, selected: true });
				}
			});
			const selectedCount = newUsers.filter(user => user.selected === true).length
			context?.dispatch({
				type: ActionTypes.SELECT_ALL_GITHUB_USERS,
				payload: { users: newUsers, selectedCount },
			});
			setAllIsSelected(!allIsSelected);
		}
	}

	function handleDuplicateClick(): void {
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
	function handleDeleteClick(): void {
		if (context?.state.users) {
			const newUsers: GithubUser[] = [];
			context.state.users.forEach((user) => {
				if (!user.selected) {
					newUsers.push(user);
				}
			});
			context?.dispatch({
				type: ActionTypes.DELETE_GITHUB_USERS,
				payload: { users: newUsers, totalCount: newUsers.length },
			});
		}
	}
	return {
		handleSelectAllClick,
		handleDuplicateClick,
		handleDeleteClick,
		selectedCount,
		userCount,
		allIsSelected,
	};
}
