import { ThemeProvider as ThemeStyledProvider } from 'styled-components';
import theme from './theme';
import { useState } from 'react';

export default function ThemeProvider({ children }) {
	const themes = Object.keys(theme);
	const [currentTheme, setCurrentTheme] = useState(themes[themes.length - 1]);

	const toggleTheme = () => {
		const themeIndex = themes.indexOf(currentTheme);
		const themeNumber = themeIndex < themes.length - 1 ? themeIndex + 1 : 0;
		const newTheme = themes[themeNumber];
		setCurrentTheme(newTheme);
		return newTheme;
	};

	const themeWithCallback = {
		...theme[currentTheme],
		name: currentTheme,
		toggleTheme: toggleTheme,
	};

	return (
		<ThemeStyledProvider theme={themeWithCallback}>
			{children}
		</ThemeStyledProvider>
	);
}
