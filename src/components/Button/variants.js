const variant = {
	small: {
		width: '14rem',
		fontSize: '1.3rem',
	},
	medium: { width: '18rem', fontSize: '1.6rem' },
	big: { width: '22rem', fontSize: '2rem' },
	square: {
		aspectRatio: '1 / 1',
		whiteSpace: 'wrap',
		lineHeight: 1.8,
		borderRadius: '20%',
	},
	get round() {
		return { ...this.square, borderRadius: '50%' };
	},
};

export default variant;
