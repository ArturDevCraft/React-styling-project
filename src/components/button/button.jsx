import styled from 'styled-components';

const StyledButton = styled.button`
	box-shadow: ${(props) => props.theme.shadow.small.pressed};
`;

export default function Button({ children }) {
	return <StyledButton>{children}</StyledButton>;
}
