import { useEffect } from 'react';
import styled from 'styled-components';

const FONT_AWESOME_KIT_URL = 'https://kit.fontawesome.com/4704e1b632.js';
const SCRIPT_ID = 'font-awesome-kit-script';

const StyledWrapper = styled.span`
	${({ style }) => style}
`;

export default function Icon({ type, variant = 'solid', style }) {
	const iconVariants = { solid: 'fa-solid', regular: 'fa-regular' };
	const iconTypes = {
		search: 'fa-magnifying-glass', //solid
		user: 'fa-user', //solid,regular
		userPlus: 'fa-user-plus', //solid
		share: 'fa-share-nodes', //solid
		plus: 'fa-plus', //solid
		comment: 'fa-comment', //solid,regular
		envelope: 'fa-envelope', //solid, regular
		send: 'fa-paper-plane', //solid, regular
		save: 'fa-floppy-disk', // solid, regular
		location: 'fa-location-dot', //solid
		arrowDown: 'fa-angle-down', //solid
		arrowRight: 'fa-angle-right', //solid
		arrowUp: 'fa-angle-up', //solid
		arrowLeft: 'fa-angle-left', //solid
		brush: 'fa-brush', //solid
		play: 'fa-play', // solid
		pause: 'fa-pause', //solid
		logo: 'fa-address-card', //solid
		radio: 'fa-radio', //solid
	};

	useEffect(() => {
		const fontAwesomeScriptExists = document.getElementById(SCRIPT_ID);
		if (fontAwesomeScriptExists) {
			return;
		}
		const script = document.createElement('script');
		script.src = FONT_AWESOME_KIT_URL;
		script.id = SCRIPT_ID;
		script.crossOrigin = 'anonymous';
		document.head.appendChild(script);
	}, []);
	const iconClass = iconVariants[variant] + ' ' + iconTypes[type];
	return (
		<StyledWrapper key={iconClass} style={style}>
			<i className={iconClass} />
		</StyledWrapper>
	);
}
