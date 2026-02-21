import { useEffect, useMemo, useReducer } from 'react';
import HiremeContext from './HiremeContext';

const hireMeInitialState = {
	position: {
		company: '',
		title: '',
		description: '',
		seniority: '',
		contractType: '',
		workMode: '',
	},
	skills: [
		{
			name: 'HTML',
			level: 5,
		},
		{
			name: 'CSS',
			level: 5,
		},
		{
			name: 'JavaScript',
			level: 5,
		},
		{
			name: 'React',
			level: 5,
		},
		{
			name: 'English',
			level: 5,
		},
		{
			name: 'Teamwork',
			level: 5,
		},
		{
			name: 'Communication',
			level: 5,
		},
		{
			name: 'Problem Solving',
			level: 5,
		},
	],
};

function saveDataInLocalStorage(state) {
	localStorage.setItem('HiremeYourCandidate', JSON.stringify(state));
}

function getDataFromLocalStorage() {
	const string = localStorage.getItem('YourCandidate');
	const data = string ? JSON.parse(string) : null;

	if (data === null) {
		return {};
	}
	return data;
}

function reducer(state, action) {
	switch (action.type) {
		case 'ADD_SKILL': {
			const newSkill = { name: action.payload, level: 5 };
			return {
				...state,
				skills: [...state.skills, newSkill],
			};
		}
		case 'DELETE_SKILL':
			return {
				...state,
				skills: state.skills.filter((skill) => skill.name !== action.payload),
			};
		case 'SET_SKILL_LEVEL': {
			const updatedSkills = state.skills.map((skill) => {
				if (skill.name === action.payload.name) {
					return { ...skill, level: action.payload.level };
				}
				return skill;
			});
			return {
				...state,
				skills: updatedSkills,
			};
		}
		case 'LOAD_DATA':
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
}

export default function HiremeContextProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, hireMeInitialState);
	const contextValue = useMemo(
		() => ({
			position: state.position,
			skills: state.skills,
			addSkill: (name) => {
				dispatch({ type: 'ADD_SKILL', payload: name });
			},
			deleteSkill: (name) => {
				dispatch({ type: 'DELETE_SKILL', payload: name });
			},
			setSkillLevel: (name, level) => {
				dispatch({ type: 'SET_SKILL_LEVEL', payload: { name, level } });
			},
		}),
		[state],
	);

	useEffect(() => {
		const dataFromStorage = getDataFromLocalStorage();
		if (dataFromStorage.columns && dataFromStorage.tasks) {
			dispatch({ type: 'LOAD_DATA', payload: dataFromStorage });
		}
	}, []);

	useEffect(() => {
		saveDataInLocalStorage(state);
	}, [state]);

	return <HiremeContext value={contextValue}>{children}</HiremeContext>;
}
