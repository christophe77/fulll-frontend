import { MouseEventHandler } from 'react';
import Icon from '../Icon/Icon';
import styles from './Checkbox.module.css';

interface ICheckboxProps {
	checked: boolean;
	onClick: MouseEventHandler<HTMLInputElement>;
}
export default function Checkbox({
	checked,
	onClick,
}: ICheckboxProps) {
	return (
		<div className={styles.checkbox} onClick={onClick}>
			{checked && <Icon name="checkbox" color="var(--purple)" />}
			{!checked && <Icon name="app" color="var(--purple)" />}
		</div>
	);
}
