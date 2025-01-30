import { ReactNode, createContext, Dispatch, useMemo, useReducer } from 'react';
import { Actions } from './githubActions';
import githubReducer, { GithubState, initialState } from './githubReducer';

type GithubContextType = {
	state: GithubState;
	dispatch: Dispatch<Actions>;
};

export const GithubContext = createContext<GithubContextType | null>(null);

type ContextProviderProps = {
	children: ReactNode;
};

export function MarketContextProvider({
	children,
}: Readonly<ContextProviderProps>) {
	const [state, dispatch] = useReducer(githubReducer, initialState);

	return (
		<GithubContext.Provider
			value={useMemo(() => ({ state, dispatch }), [state, dispatch])}
		>
			{children}
		</GithubContext.Provider>
	);
}

export default MarketContextProvider;
