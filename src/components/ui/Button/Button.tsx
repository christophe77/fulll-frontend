interface IButtonProps {
	className?: string;
	text: string;
	onClick: () => void;
}
export default function Button(props: IButtonProps) {
	const { className, text, onClick } = props;

	return (
		<button aria-label={text} onClick={onClick} className={className}>
			{text}
		</button>
	);
}
