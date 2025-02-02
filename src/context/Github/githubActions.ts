import { GithubSearchUsersResponse, GithubUser } from '../..//types/github';

export enum ActionTypes {
	SET_GITHUB_USERS = 'SET_GITHUB_USERS',
	UPDATE_GITHUB_USER_SELECTION = 'UPDATE_GITHUB_USER_SELECTION',
	DUPLICATE_GITHUB_USER = 'DUPLICATE_GITHUB_USER',
	DELETE_GITHUB_USER = 'DELETE_GITHUB_USER',
}

export type SetUsersAction = {
	type: ActionTypes.SET_GITHUB_USERS;
	payload: GithubSearchUsersResponse;
};

export type UpdateUserSelectionAction = {
	type: ActionTypes.UPDATE_GITHUB_USER_SELECTION;
	payload: {userId : number, selected: boolean};
};

export type DeleteUserAction = {
	type: ActionTypes.DELETE_GITHUB_USER;
	payload: GithubUser;
};

export type DuplicateUserAction = {
	type: ActionTypes.DUPLICATE_GITHUB_USER;
	payload: GithubUser;
};

export type Actions =
	| SetUsersAction
	| UpdateUserSelectionAction
	| DeleteUserAction
	| DuplicateUserAction;
