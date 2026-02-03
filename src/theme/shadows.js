//generate  shadow css property for given colors and all sizes configured in sizes object
const styles = {
	light: (colorLight, colorDark, size = 10) =>
		`${size}px ${size}px ${size * 2}px ${colorDark}, 
    -${size}px -${size}px ${size * 2}px ${colorLight}`,

	inset: (colorLight, colorDark, size = 6) =>
		`inset ${size}px ${size}px ${size * 2}px ${colorDark}, 
     inset -${size}px -${size}px ${size * 2}px ${colorLight}`,
};

const sizes = {
	small: 8,
	medium: 12,
	big: 16,
};

export const shadows = (colorLight, colorDark) =>
	Object.entries(sizes).reduce(
		(acc, [key, value]) => ({
			[key]: {
				flat: styles.light(colorLight, colorDark, value),
				pressed: styles.light(colorLight, colorDark, value),
			},
			...acc,
		}),
		{},
	);
