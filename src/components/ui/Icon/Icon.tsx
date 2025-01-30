import Icons from './icons.svg';

interface IIconProps {
	name: string;
	color: string;
	size: string | number;
    onClick? : ()=>void;
}

export default function Icon(props: IIconProps) {
	const { name, color, size, onClick } = props;
	return (
		<svg
			className={`icon icon-${name}`}
			fill={color}
			width={size}
			height={size}
            onClick={onClick}
		>
			<use xlinkHref={`${Icons}#icon-${name}`} />
		</svg>
	);
}
