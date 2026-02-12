import StyledOption from './Option.styled';

export default function Option({ value, children }) {
	return <StyledOption value={value}>{children}</StyledOption>;
}
