import useSearchInput from './useSearchInput';
import styles from './SearchInput.module.css';

export default function SearchInput() {
	const { searchUsers } = useSearchInput();
	return <div className={styles.container}>Search input</div>;
}
