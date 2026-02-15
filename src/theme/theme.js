// generate dynamically object witch color values and shadows for each theme color usege: theme.warm.color.text; theme.light.shadow.big.flat
import colors from './colors';
import { shadows } from './shadows';

const theme = colors.reduce(
	(acc, current) => ({
		[current.name]: {
			color: { ...current.colors },
			shadow: {
				...shadows(current.colors.shadowLight, current.colors.shadowDark),
			},
		},

		...acc,
	}),
	{},
);

export default theme;
