import { useContext } from 'react';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	Cell,
} from 'recharts';
import { HiremeContext } from '../../store';
const mySkills = [
	{
		name: 'HTML',
		level: 10,
	},
	{
		name: 'CSS',
		level: 10,
	},
	{
		name: 'JavaScript',
		level: 9,
	},
	{
		name: 'React',
		level: 7,
	},
	{
		name: 'English',
		level: 6,
	},
	{
		name: 'Teamwork',
		level: 8,
	},
	{
		name: 'Communication',
		level: 10,
	},
	{
		name: 'Problem Solving',
		level: 10,
	},
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088FE'];
export default function Summary() {
	const { position, skills } = useContext(HiremeContext);
	const data = mySkills.map((mySkill) => {
		const theirSkill = skills.find((s) => s.name === mySkill.name);
		const theirSkillVal = theirSkill ? theirSkill.level : 0;
		const matching = (mySkill.level * 100) / theirSkillVal;
		const value = matching > 100 ? 100 : matching;
		return {
			name: mySkill.name,
			value: value,
		};
	});
	return (
		<section style={{ width: '100%', height: 300 }}>
			<h3>My suitability for your offer</h3>
			<ResponsiveContainer>
				<BarChart
					data={data}
					margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
				>
					{/* Subtelna siatka - tylko poziome linie */}
					<CartesianGrid
						strokeDasharray="3 3"
						vertical={false}
						stroke="#010101"
					/>

					<XAxis
						dataKey="name"
						axisLine={false}
						tickLine={false}
						tick={{ fill: '#666', fontSize: 12 }}
					/>
					<YAxis
						axisLine={false}
						tickLine={false}
						tick={{ fill: '#666', fontSize: 12 }}
					/>

					<Tooltip
						cursor={{ fill: '#f5f5f5' }} // kolor tła po najechaniu
						contentStyle={{
							borderRadius: '8px',
							border: 'none',
							boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
						}}
					/>

					<Bar
						dataKey="value"
						radius={[6, 6, 0, 0]} // Zaokrąglone górne rogi słupków
					>
						{/* Tutaj Cell działa idealnie, jeśli chcesz każdy słupek w innym kolorze */}
						{data.map((entry, index) => (
							<Cell
								key={`cell-${index}`}
								fill={COLORS[index % COLORS.length]}
							/>
						))}
					</Bar>
				</BarChart>
			</ResponsiveContainer>
		</section>
	);
}
