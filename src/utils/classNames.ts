export function classNames(
	...args: Array<string | boolean | null | undefined>
): string {
	return args.filter((item) => !!item).join(' ');
}
