import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import Button from './components/Button';
import Input from './components/Input';
import theme from './theme';
import { useState } from 'react';
import Icon from './components/Icon/Icon';

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

				{/* INPUTS */}
				<Input
					onClick={toggleTcheme}
					placeholder="Type text..."
					size="small"
					type="text"
				/>
				<Input
					onClick={toggleTcheme}
					placeholder="Type text..."
					size="medium"
				/>
				<Input onClick={toggleTcheme} placeholder="Type text..." size="big" />
				<Input onClick={toggleTcheme} placeholder="Type text..." size="small" />
				<Input onClick={toggleTcheme} placeholder="Type text..." width="0.45" />
				<Input
					onClick={toggleTcheme}
					placeholder="Type text..."
					size="medium"
					width="0.45"
				/>
				<Input
					onClick={toggleTcheme}
					placeholder="Type text..."
					size="big"
					width="0.45"
				/>
				<Input
					onClick={toggleTcheme}
					placeholder="Type text..."
					size="big"
					width="0.45"
				/>
				<Input
					onClick={toggleTcheme}
					placeholder="Type text..."
					size="small"
					shape="square"
				/>
				<Input
					onClick={toggleTcheme}
					placeholder="Type text..."
					size="medium"
					shape="square"
				/>
				<Input
					onClick={toggleTcheme}
					placeholder="Type text..."
					size="big"
					shape="square"
				/>
				<Input
					onClick={toggleTcheme}
					placeholder="Type text..."
					size="small"
					shape="round"
					width="1"
				/>
				<Input
					onClick={toggleTcheme}
					placeholder="Type text..."
					size="medium"
					shape="round"
				/>
				<Input
					onClick={toggleTcheme}
					placeholder="Type text..."
					size="big"
					shape="round"
				/>

				<Icon type="search" />
				<Icon type="user" />
				<Icon type="user" variant="regular" />
				<Icon type="userPlus" />
				<Icon type="share" />
				<Icon type="plus" />
				<Icon type="comment" />
				<Icon type="comment" variant="regular" />
				<Icon type="envelope" />
				<Icon type="envelope" variant="regular" />
				<Icon type="send" />
				<Icon type="send" variant="regular" />
				<Icon type="save" />
				<Icon type="save" variant="regular" />
				<Icon type="location" />
				<Icon type="arrowDown" />
				<Icon type="arrowRight" />
				<Icon type="arrowUp" />
				<Icon type="arrowLeft" />
			</ThemeProvider>
		</>
	);
}

export default App;
