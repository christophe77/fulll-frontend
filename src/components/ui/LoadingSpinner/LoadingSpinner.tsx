import styles from './LoadingSpinner.module.css';

interface ILoadingSpinnerProps {
	size?: number | string;
}
export default function LoadingSpinner({
	size = '48px',
}: ILoadingSpinnerProps) {
	return (
		<span className={styles.loader} style={{ width: size, height: size }} />
	);
}
