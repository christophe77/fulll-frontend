import { ActionTypes, Actions } from './githubActions';
import { GithubUser } from '../../types/github';

export type GithubState = {
	users: GithubUser[];
	totalCount: number;
	selectedCount: number;
	incompleteResults: boolean;
	isLoading: boolean;
};

export const initialState: GithubState = {
	users: [],
	totalCount: 0,
	selectedCount: 0,
	incompleteResults: false,
	isLoading: false,
};

export default function githubReducer(state: GithubState, action: Actions) {
	switch (action.type) {
		case ActionTypes.SET_GITHUB_USERS:
			return {
				...state,
				users: action.payload.items,
				totalCount: action.payload.total_count,
				selectedCount: 0,
				incompleteResults: action.payload.incomplete_results,
				isLoading: false,
			};
		case ActionTypes.UPDATE_GITHUB_USER_SELECTION:
			const userToUpdateIndex = state.users.findIndex(
				(user) => user.id === action.payload.userId,
			);
			const newUserArray = [...state.users];
			newUserArray[userToUpdateIndex].selected = action.payload.selected;
			return {
				...state,
				users: newUserArray,
			};
		case ActionTypes.DELETE_GITHUB_USER:
			return {
				...state,
			};
		case ActionTypes.DUPLICATE_GITHUB_USER:
			return {
				...state,
			};
		default:
			return state;
	}
}
