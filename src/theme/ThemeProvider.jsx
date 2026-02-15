import { ThemeProvider as ThemeStyledProvider } from 'styled-components';
import theme from './theme';
import { useState } from 'react';

export default function ThemeProvider({ children }) {
	const themes = Object.keys(theme);
	const [currentTheme, setCurrentTheme] = useState(themes[0]);

	const toggleTheme = () => {
		const themeIndex = themes.indexOf(currentTheme);
		const themeNumber = themeIndex < themes.length - 1 ? themeIndex + 1 : 0;
		setCurrentTheme(themes[themeNumber]);
	};

	const themeWithCallback = {
		...theme[currentTheme],
		toggleTheme: toggleTheme,
	};

	return (
		<ThemeStyledProvider theme={themeWithCallback}>
			{children}
		</ThemeStyledProvider>
	);
}
