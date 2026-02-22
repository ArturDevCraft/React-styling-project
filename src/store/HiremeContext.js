import { createContext } from 'react';

const HiremeContext = createContext({
	position: {},
	skills: [],
	addSkill: () => {},
	deleteSkill: () => {},
	setSkillLevel: () => {},
	setPosition: () => {},
});
export default HiremeContext;
