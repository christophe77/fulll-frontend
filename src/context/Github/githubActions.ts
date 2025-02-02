import { GithubSearchUsersResponse, GithubUser } from '../..//types/github';

export enum ActionTypes {
	SET_GITHUB_USERS = 'SET_GITHUB_USERS',
	UPDATE_GITHUB_USER_SELECTED = 'UPDATE_GITHUB_USER_SELECTED',
	DUPLICATE_GITHUB_USERS = 'DUPLICATE_GITHUB_USERS',
	DELETE_GITHUB_USERS = 'DELETE_GITHUB_USERS',
	SELECT_ALL_GITHUB_USERS = "SELECT_ALL_GITHUB_USERS"
}

export type SetUsersAction = {
	type: ActionTypes.SET_GITHUB_USERS;
	payload: GithubSearchUsersResponse;
};

export type UpdateUserSelectionAction = {
	type: ActionTypes.UPDATE_GITHUB_USER_SELECTED;
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

export type SelectAllUsersAction = {
	type: ActionTypes.SELECT_ALL_GITHUB_USERS;
	payload: { users: GithubUser[]; selectedCount: number };
};

export type Actions =
	| SetUsersAction
	| UpdateUserSelectionAction
	| DeleteUsersAction
	| DuplicateUsersAction
	| SelectAllUsersAction;
