import { GithubSearchUsersResponse, GithubUser } from '../..//types/github';

export enum ActionTypes {
	SET_GITHUB_USERS = 'SET_GITHUB_USERS',
	UPDATE_GITHUB_USER_SELECTION = 'UPDATE_GITHUB_USER_SELECTION',
	DUPLICATE_GITHUB_USERS = 'DUPLICATE_GITHUB_USERS',
	DELETE_GITHUB_USERS = 'DELETE_GITHUB_USERS',
}

export type SetUsersAction = {
	type: ActionTypes.SET_GITHUB_USERS;
	payload: GithubSearchUsersResponse;
};

export type UpdateUserSelectionAction = {
	type: ActionTypes.UPDATE_GITHUB_USER_SELECTION;
	payload: { users: GithubUser[]; selectedCount: number };
};

export type DeleteUsersAction = {
	type: ActionTypes.DELETE_GITHUB_USERS;
	payload: { users: GithubUser[]; totalCount: number };
};

export type DuplicateUsersAction = {
	type: ActionTypes.DUPLICATE_GITHUB_USERS;
	payload: { users: GithubUser[]; totalCount: number };
};

export type Actions =
	| SetUsersAction
	| UpdateUserSelectionAction
	| DeleteUsersAction
	| DuplicateUsersAction;
