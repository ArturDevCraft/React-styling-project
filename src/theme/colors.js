import { useActionState } from 'react';

export const colors = [
	{
		name: 'light',
		colors: {
			accent: '#0088ff',
			accentHover: '#0070d2',
			background: '#e6e6e6',
			text: '#686868',
			shadowLight: '#ffffff',
			shadowDark: '#939699',
		},
	},
	{
		name: 'dark',
		colors: {
			accent: '#6d5dfc',
			accentHover: '#5a4bd8',
			background: '#2f333d',
			text: '#e0e5ec',
			shadowLight: '#3c424c',
			shadowDark: '#20242e',
		},
	},
	{
		name: 'warm',
		colors: {
			accent: '#ea7243',
			accentHover: '#d86030',
			background: '#f4e7d5',
			text: '#5b4636',
			shadowLight: '#fffded',
			shadowDark: '#c1b7a7',
		},
	},
	{
		name: 'zosiaTheme',
		colors: {
			accent: '#ff9b4e',
			accentHover: '#ff7a1c',
			background: '#000000',
			text: '#fff09a',
			shadowLight: '#9f9f9f',
			shadowDark: '#211b10',
		},
	},
];
export default colors;
