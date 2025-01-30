import { ReactNode } from 'react';
import GithubContextProvider from '../context/Github/GithubContext';

interface IMyAppProviderProps {
	children: ReactNode;
}
export default function MyAppProvider({
	children,
}: Readonly<IMyAppProviderProps>) {
	return <GithubContextProvider>{children}</GithubContextProvider>;
}
