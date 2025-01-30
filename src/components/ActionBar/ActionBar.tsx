// import useActionBar from './useActionBar';
import Icon from '../ui/Icon/Icon';
import styles from './ActionBar.module.css';

export default function ActionBar() {
	return (
		<div className={styles.container}>
			<span>[] 3 elements selected</span>
			<Icon
				name={'copy'}
				onClick={() => console.log('Copy')}
				size="20px"
				color={'#7f8082'}
			/>
			<Icon
				name={'trash'}
				onClick={() => console.log('Delete')}
				size="20px"
				color={'#7f8082'}
			/>
		</div>
	);
}
