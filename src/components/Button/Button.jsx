import StyledButton from './Button.styled';

export default function Button({ children, onClick }) {
	return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
