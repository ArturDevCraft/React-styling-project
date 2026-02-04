import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import Button from './components/Button/Button';
import theme from './theme';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${({ theme }) => theme.color.background};
  }
`;

function App() {
	// console.log(theme);

	const themes = ['light', 'dark', 'warm'];
	const [currentTheme, setCurrentTheme] = useState(themes[0]);

	const toggleTcheme = () => {
		const themeIndex = themes.indexOf(currentTheme);
		const themeNumber = themeIndex < themes.length - 1 ? themeIndex + 1 : 0;
		setCurrentTheme(themes[themeNumber]);
	};

	return (
		<>
			<GlobalStyle theme={theme[currentTheme]} />
			<ThemeProvider theme={theme[currentTheme]}>
				<Button onClick={toggleTcheme}>Toggle theme</Button>
			</ThemeProvider>
		</>
	);
}

export default App;
