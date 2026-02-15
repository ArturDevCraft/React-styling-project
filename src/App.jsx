import { createGlobalStyle } from 'styled-components';
import FormComponentShowRoom from './components/FormComponentsShowRoom';
import { ThemeProvider } from './theme';

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

	return (
		<>
			<ThemeProvider>
				<GlobalStyle />
				<FormComponentShowRoom />
			</ThemeProvider>
		</>
	);
}
