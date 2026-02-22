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

	thin: { paddingBlock: '0.2em' },
	thicker: { paddingBlock: '0.9em' },
	thickest: { paddingBlock: '1.3em' },

	square: {
		aspectRatio: '1 / 1',
		whiteSpace: 'wrap',
		lineHeight: 1.5,
		padding: '1.3em',
	},
	rectangle: {
		whiteSpace: 'wrap',
		lineHeight: 1.5,
		padding: '1.3em',
		aspectRatio: '4 / 1',
	},
	get round() {
		return { ...this.square, borderRadius: '50%' };
	},
};

export default variant;
