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
	totalCount: -1,
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
		case ActionTypes.UPDATE_GITHUB_USER_SELECTED:
			return {
				...state,
				users: action.payload.users,
				selectedCount: action.payload.selectedCount,
			};
		case ActionTypes.SELECT_ALL_GITHUB_USERS:
			return {
				...state,
				users: action.payload.users,
				selectedCount: action.payload.selectedCount,
			};
		case ActionTypes.DELETE_GITHUB_USERS:
			return {
				...state,
				users: action.payload.users,
				totalCount: action.payload.totalCount,
				selectedCount: 0,
			};
		case ActionTypes.DUPLICATE_GITHUB_USERS:
			return {
				...state,
				users: action.payload.users,
				totalCount: action.payload.totalCount,
				selectedCount: 0,
			};
		default:
			return state;
	}
}
