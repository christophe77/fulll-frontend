import { useContext } from 'react';
import { GithubContext } from '../../context/Github/GithubContext';

export default function useSearchResponseContainer() {
	const context = useContext(GithubContext);
	const githubUsers = context?.state.users;

	return { githubUsers };
}
