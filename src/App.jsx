import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import Button from './components/Button/Button';
import theme from './theme';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
html{
  font-size: 62.5%;
}
  body{
    font-size: 1.6rem;
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
				<Button onClick={toggleTcheme} size="small">
					Toggle theme
				</Button>
				<Button onClick={toggleTcheme} size="medium">
					Toggle theme
				</Button>
				<Button onClick={toggleTcheme} size="big">
					Toggle theme
				</Button>

				<Button onClick={toggleTcheme} size="small">
					Toggle theme
				</Button>
				<Button onClick={toggleTcheme} width="0.45">
					Toggle theme
				</Button>
				<Button onClick={toggleTcheme} size="medium" width="0.45">
					Toggle theme
				</Button>
				<Button onClick={toggleTcheme} size="big" width="0.45">
					Toggle theme
				</Button>
				<Button onClick={toggleTcheme} size="big" width="0.45">
					Toggle theme
				</Button>

				<Button onClick={toggleTcheme} size="small" shape="square">
					Toggle theme
				</Button>
				<Button onClick={toggleTcheme} size="medium" shape="square">
					Toggle theme
				</Button>
				<Button onClick={toggleTcheme} size="big" shape="square">
					Toggle theme
				</Button>

				<Button onClick={toggleTcheme} size="small" shape="round" width="1">
					Toggle theme
				</Button>
				<Button onClick={toggleTcheme} size="medium" shape="round">
					Toggle theme
				</Button>
				<Button onClick={toggleTcheme} size="big" shape="round">
					Toggle theme
				</Button>
			</ThemeProvider>
		</>
	);
}

export default App;
