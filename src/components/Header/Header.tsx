import Icon from '../ui/Icon/Icon';
import styles from './Header.module.css';

export default function Header() {
	return (
		<div className={styles.container}>
			<Icon
				name={'github'}
				size="35px"
				color={'white'}
			/>
			<h1>Github users search</h1>
		</div>
	);
}
