//generate  shadow css property for given colors and all sizes configured in sizes object
const styles = {
	light: (colorLight, colorDark, size = 5) =>
		`${size}px ${size}px ${size * 2}px ${colorDark}, 
    -${size}px -${size}px ${size * 2}px ${colorLight}`,

	inset: (colorLight, colorDark, size = 5) =>
		`inset -${size}px -${size}px ${size * 2}px ${colorLight},
    inset ${size}px ${size}px ${size * 2}px ${colorDark}`,
};

const sizes = {
	verySmall: 3,
	small: 5,
	medium: 7,
	big: 9,
	veryBig: 20,
	veryverbig: 30,
};

export const shadows = (colorLight, colorDark) =>
	Object.entries(sizes).reduce(
		(acc, [key, value]) => ({
			[key]: {
				flat: styles.light(colorLight, colorDark, value),
				pressed: styles.inset(colorLight, colorDark, value),
			},
			...acc,
		}),
		{},
	);

