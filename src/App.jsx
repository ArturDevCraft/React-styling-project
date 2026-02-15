import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { useState } from 'react';
import FormComponentShowRoom from './components/FormComponentsShowRoom';

const GlobalStyle = createGlobalStyle`
html{
  font-size: 62.5%;
}
  body{
    font-size: 1.6rem;
    color: ${({ theme }) => theme.color.text};
    background-color: ${({ theme }) => theme.color.background};
  }
`;

export default function App() {
	// console.log(theme);

	const themes = ['light', 'dark', 'warm'];
	const [currentTheme, setCurrentTheme] = useState(themes[0]);

	const toggleTheme = () => {
		const themeIndex = themes.indexOf(currentTheme);
		const themeNumber = themeIndex < themes.length - 1 ? themeIndex + 1 : 0;
		setCurrentTheme(themes[themeNumber]);
	};

	return (
		<>
			<GlobalStyle theme={theme[currentTheme]} />
			<ThemeProvider theme={theme[currentTheme]}>
				<FormComponentShowRoom callback={() => toggleTheme()} />
			</ThemeProvider>
		</>
	);
}
