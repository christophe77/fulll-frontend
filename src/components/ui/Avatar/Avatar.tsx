import styles from './Avatar.module.css';

interface IAvatarProps {
	img: string;
}
export default function Avatar({ img }: IAvatarProps) {
	return (
		<img
			src={img}
			alt="Github user avatar"
			className={styles.avatar}
			onError={({ currentTarget }) => {
				currentTarget.onerror = null;
				currentTarget.src = './fallback image . ext';
			}}
		/>
	);
}
