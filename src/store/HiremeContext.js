import { createContext } from 'react';

const HiremeContext = createContext({
	position: {},
	skills: [],
	addSkill: () => {},
	deleteSkill: () => {},
	setSkillLevel: () => {},
});
export default HiremeContext;
