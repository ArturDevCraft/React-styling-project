const variant = {
	verySmall: {
		width: '10rem',
		fontSize: '0.8rem',
	},
	small: {
		width: '14rem',
		fontSize: '1.3rem',
	},
	medium: { width: '20rem', fontSize: '1.6rem' },

	big: { width: '30rem', fontSize: '2rem' },

	thin: { height: '0.8rem' },
	thicker: { height: '1.6rem' },
	thickest: { height: '2.4rem' },

	square: {
		aspectRatio: '1 / 1',
		whiteSpace: 'wrap',
		lineHeight: 1.5,
		borderRadius: '20%',
		padding: '1.3em',
	},
	get round() {
		return { ...this.square, borderRadius: '50%' };
	},
};

export default variant;
