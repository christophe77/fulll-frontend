import { classNames as cn } from '../../../utils/classNames';
import styles from './Button.module.css';

interface IButtonProps {
	className?: string;
	text: string;
	onClick: () => void;
}
export default function Button(props: IButtonProps) {
	const { className, text, onClick } = props;

	return (
		<button
			aria-label={text}
			onClick={onClick}
			className={cn(styles.button, className)}
		>
			{text}
		</button>
	);
}
