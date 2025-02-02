import useSearchInput from './useSearchInput';
import Icon from '../ui/Icon/Icon';
import styles from './SearchInput.module.css';
import LoadingSpinner from '../ui/LoadingSpinner/LoadingSpinner';

export default function SearchInput() {
	const { handleSearchChange, isLoading, error, hasError } = useSearchInput();
	return (
		<div className={styles.container}>
			<div className={styles.responsiveThreeColumnGrid}>
				<div></div>
				<div className={styles.searchColumn}>
					<input
						type="text"
						onChange={handleSearchChange}
						className={styles.searchInput}
						placeholder="Type to search"
					/>
				</div>
				<div className={styles.loading}>
					{isLoading && <LoadingSpinner size="30px" />}
				</div>
			</div>
			<div className={styles.error}>
				{hasError && (
					<>
						<Icon name={'bug'} size="20px" color={'red'} />
						<span>{error}</span>
					</>
				)}
			</div>
		</div>
	);
}
