import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import Button from './components/button/button';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${({ theme }) => theme.color.background};
  }
`;

function App() {
	// console.log(theme);
	return (
		<>
			<GlobalStyle theme={theme.warm} />
			<ThemeProvider theme={theme.warm}>
				<Button>Press</Button>
			</ThemeProvider>
		</>
	);
}

export default App;
