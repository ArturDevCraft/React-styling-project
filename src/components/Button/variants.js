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
	thin: { paddingBlock: '0.2em' },
	thicker: { paddingBlock: '0.9em' },
	thickest: { paddingBlock: '1.3em' },
	clear: {
		backgroundColor: 'transparent',
		backgroundImage: 'none',
		border: 'none',
		color: 'var(--text)',
		padding: '0.5em 1em',
		cursor: 'pointer',
		boxShadow: 'none',
		width: 'fit-content',
	},
	cta: {
		backgroundImage: 'none',
		backgroundColor: 'var(--accent)',
		color: 'var(--bg)',
		'&:hover': {
			backgroundColor: 'var(--accentHover)',
			color: 'var(--bg)',
		},
	},

	get round() {
		return { ...this.square, borderRadius: '50%' };
	},
};

export default variant;
