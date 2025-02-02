import { MouseEventHandler } from 'react';
import Icon from '../Icon/Icon';
import styles from './Checkbox.module.css';

interface ICheckboxProps {
	checked: boolean;
	label?: string;
	onClick: MouseEventHandler<HTMLInputElement>;
}
export default function Checkbox({
	checked,
	onClick,
	label = '',
}: ICheckboxProps) {
	return (
		<div className={styles.checkbox} onClick={onClick}>
			<label className={styles.label}>
				{checked && <Icon name="checkbox" color="var(--purple)" />}
				{!checked && <Icon name="app" color="var(--purple)" />}
				{label}
			</label>
		</div>
	);
}
