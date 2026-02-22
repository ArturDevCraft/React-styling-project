import { createContext } from 'react';

const HiremeContext = createContext({
	position: {},
	skills: [],
	contact: {},
	addSkill: () => {},
	deleteSkill: () => {},
	setSkillLevel: () => {},
	setPosition: () => {},
	setContact: () => {},
});
export default HiremeContext;
