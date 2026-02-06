//generate  shadow css property for given colors and all sizes configured in sizes object
const styles = {
	light: (colorLight, colorDark, size = 5) =>
		`${size}px ${size}px ${size * 2.2}px ${colorDark}, 
    -${size}px -${size}px ${size * 2.2}px ${colorLight}`,

	inset: (colorLight, colorDark, size = 5) =>
		`inset -${size}px -${size}px ${size * 2.2}px ${colorLight},
    inset ${size}px ${size}px ${size * 2.2}px ${colorDark}`,
};

const sizes = {
	verySmall: 2,
	small: 3,
	medium: 5,
	big: 7,
	veryBig: 10,
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
