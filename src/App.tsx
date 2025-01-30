import Header from './components/Header/Header';
import SearchInput from './components/SearchInput/SearchInput';
import ActionBar from './components/ActionBar/ActionBar';
import SearchResponseContainer from './components/SearchResponseContainer/SearchResponseContainer';
import MyAppProvider from './providers';

function App() {
	return (
		<MyAppProvider>
			<Header />
			<SearchInput />
			<ActionBar />
			<SearchResponseContainer />
		</MyAppProvider>
	);
}

export default App;
