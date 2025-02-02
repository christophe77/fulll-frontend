import { useContext } from 'react';
import { GithubContext } from '../../context/Github/GithubContext';

export default function useSearchResponseContainer() {
	const context = useContext(GithubContext);
	const githubUsers = context?.state.users;
	const userCount = context?.state.totalCount || -1;
	return { githubUsers, userCount };
}
