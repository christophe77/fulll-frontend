import useSearchInput from './useSearchInput';
import Icon from '../ui/Icon/Icon';
import styles from './SearchInput.module.css';
import LoadingSpinner from '../ui/LoadingSpinner/LoadingSpinner';

export default function SearchInput() {
	const { handleSearchChange, isLoading, error, hasError } = useSearchInput();
	return (
		<div className={styles.container}>
			{/* Table */}
			<div className={styles.responsiveThreeColumnGrid}>
				{/* Col 1 */}
				<div></div>
				{/* Col 2 */}
				<div className={styles.searchColumn}>
					<input
						type="text"
						onChange={handleSearchChange}
						className={styles.searchInput}
						placeholder="Search"
					/>
				</div>
				{/* Col 3 */}
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
