import styled from 'styled-components';
import variant from './variants';

const StyledLabel = styled.label`
	font-size: ${({ size }) =>
		variant?.[size]?.fontSize ?? variant.medium.fontSize};
`;

export default StyledLabel;
