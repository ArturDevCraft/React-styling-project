const publicKey = import.meta.env.VITE_PUBLIC_KEY;
const serviceID = import.meta.env.VITE_SERVICE_ID;
const templateID = import.meta.env.VITE_TEMPLATE_ID;

import { useContext, useState } from 'react';
import emailjs from '@emailjs/browser';
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
import StyledColumnWrapper from '../ColumnWrapper.styled';
import Button from '../Button';
import Input from '../Input';
import StyledRowWrapper from '../RowWrapper.styled';

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
export default function Summary({ duration }) {
	const { position, skills, contact, setContact } = useContext(HiremeContext);
	const [sending, setSending] = useState(false);
	const [mailSent, setMailSent] = useState(false);
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
	const sendEmailJS = (formValues) => {
		const { name, email, phone, title, message } = formValues;
		const templateParams = {
			name,
			message,
			title: title,
			email,
			phone,
		};
		setSending(true);

		emailjs.send(serviceID, templateID, templateParams, publicKey).then(
			() => {
				setMailSent(true);
				setSending(false);
				// resetFormValues();
			},
			(err) => {
				setSending(false);
				alert('sendError: ' + err);
			},
		);
	};

	const sendButtonHandler = () => {
		sendEmailJS({
			name: contact.name,
			email: contact.email,
			title: 'HireMe! - Someone is intersted working with you!',
			phone: '',
			message: `
               <b>Company name:</b>  ${position.company} <br><br>
               <b>Position:</b>  <br> ${position.title}<br><br>
               <b>Seniority:</b>  <br> ${position.seniority}<br><br>
               <b>Description:</b>  <br> ${position.description}<br><br>
               <b>Contract type:</b>  ${position.contractType} <br><br>
               <b>Work mode:</b> ${position.workMode}<br><br>
               <b>Most important skill:</b>   ${position.mostImportantSkill}
               <br><br>
               <b>Required skills:</b> <br><br>
                ${skills
									.map(
										(skill) => `
									
										${skill.name}: ${skill.level}
										<br />
									`,
									)
									.join('')}
            `,
		});
	};
	return (
		<>
			<StyledColumnWrapper $align="center" style={{ height: 400 }}>
				<h3>It took {duration} minutes to complete this form</h3>
				<h3>My suitability for your offer:</h3>
				<ResponsiveContainer>
					<BarChart
						data={data}
						margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
					>
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
							cursor={{ fill: '#f5f5f5' }}
							contentStyle={{
								borderRadius: '8px',
								border: 'none',
								boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
							}}
						/>

						<Bar dataKey="value" radius={[6, 6, 0, 0]}>
							{data.map((entry, index) => (
								<Cell
									key={`cell-${index}`}
									fill={COLORS[index % COLORS.length]}
								/>
							))}
						</Bar>
					</BarChart>
				</ResponsiveContainer>
			</StyledColumnWrapper>
			<StyledColumnWrapper $align="center">
				<h3>
					If you are interested in working with me, please send this to me.
				</h3>
				<StyledRowWrapper>
					<Input
						value={contact.name}
						size="medium"
						name="contact-name"
						placeholder="Your Name"
						onChange={(e) => setContact({ ...contact, name: e.target.value })}
					/>
					<Input
						value={contact.email}
						size="medium"
						name="contact-email"
						placeholder="Your e-mail address"
						type="email"
						onChange={(e) => setContact({ ...contact, email: e.target.value })}
					/>
				</StyledRowWrapper>
				<Button
					onClick={sendButtonHandler}
					type="cta"
					disabled={mailSent || sending}
				>
					{mailSent && ' Sent'}
					{sending && 'Sending...'}
					{!mailSent && !sending && 'Send it to me'}
				</Button>
				{mailSent && <h2>Thank you for your time</h2>}
			</StyledColumnWrapper>
		</>
	);
}
