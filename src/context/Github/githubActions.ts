import { GithubSearchUsersResponse } from '../..//types/github';

export enum ActionTypes {
    SET_GITHUB_USERS = 'SET_GITHUB_USERS',
}

export type SetUsersAction = {
    type: ActionTypes.SET_GITHUB_USERS;
    payload: GithubSearchUsersResponse;
};

export type Actions =
    | SetUsersAction;
