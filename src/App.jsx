import { createGlobalStyle } from 'styled-components';
import FormComponentShowRoom from './components/FormComponentsShowRoom';
import { ThemeProvider } from './theme';
import HireMe from './components/HireMe';
import { HiremeContextProvider } from './store';

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
	return (
		<HiremeContextProvider>
			<ThemeProvider>
				<GlobalStyle />
				{/* <FormComponentShowRoom /> */}

				<HireMe />
			</ThemeProvider>
		</HiremeContextProvider>
	);
}
