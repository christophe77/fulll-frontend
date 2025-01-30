import { ActionTypes, Actions } from './githubActions';
import { GithubUser } from '../../types/github';

export type GithubState = {
	users: GithubUser[];
	totalCount: number;
	incompleteResults: boolean;
};

export const initialState: GithubState = {
	users: [],
	totalCount: 0,
	incompleteResults: false,
};

export default function githubReducer(state: GithubState, action: Actions) {
	switch (action.type) {
		case ActionTypes.SET_GITHUB_USERS:
			return {
				...state,
				users: action.payload.items,
				totalCount: action.payload.total_count,
				incompleteResults : action.payload.incomplete_results
			};
		default:
			return state;
	}
}
