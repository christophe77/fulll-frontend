interface IIconButtonProps {
	className?: string;
	ariaLabel: string;
	icon: string;
	onClick: () => void;
}
export default function Button(props: IIconButtonProps) {
	const { icon, className, ariaLabel, onClick } = props;

	return (
		<button aria-label={ariaLabel} onClick={onClick} className={className}>
			<img src={icon} alt={ariaLabel} />
		</button>
	);
}
