import Button from '../Button';
import Input from '../Input';
import Select from '../Select';
import Icon from '../Icon/Icon';
import Slider from '../Slider';
import { useTheme } from 'styled-components';

export default function FormComponentShowRoom() {
	const { toggleTheme } = useTheme();
	return (
		<>
			<Button onClick={toggleTheme} size="small">
				Toggle theme
			</Button>
			<Button onClick={toggleTheme} size="medium">
				Toggle theme
			</Button>
			<Button onClick={toggleTheme} size="big">
				Toggle theme
			</Button>
			<Button onClick={toggleTheme} size="small">
				Toggle theme
			</Button>
			<Button onClick={toggleTheme} width="0.45">
				Toggle theme
			</Button>
			<Button onClick={toggleTheme} size="medium" width="0.45">
				Toggle theme
			</Button>
			<Button onClick={toggleTheme} size="big" width="0.45">
				Toggle theme
			</Button>
			<Button onClick={toggleTheme} size="big" width="0.45">
				Toggle theme
			</Button>
			<Button onClick={toggleTheme} size="small" shape="square">
				Toggle theme
			</Button>
			<Button onClick={toggleTheme} size="medium" shape="square">
				Toggle theme
			</Button>
			<Button onClick={toggleTheme} size="big" shape="square">
				Toggle theme
			</Button>
			<Button onClick={toggleTheme} size="small" shape="round" width="1">
				Toggle theme
			</Button>
			<Button onClick={toggleTheme} size="medium" shape="round">
				Toggle theme
			</Button>
			<Button onClick={toggleTheme} size="big" shape="round">
				<Icon type="brush" />
				<br />
				Toggle theme
			</Button>

			{/* Sliders */}

			<Slider
				name="slider1"
				label="Set the valuye"
				placeholder="set the value"
				min="1"
				max="100"
				size="big"
			>
				<Icon type="location" />
			</Slider>

			<Slider
				name="slider1"
				label="Set the valuye"
				placeholder="set the value"
				min="1"
				max="100"
				step="1"
				defaultValue="90"
			>
				<Icon type="location" />
			</Slider>
			{/* Selects */}
			<Select
				name="choose"
				label="Select your favourite option:"
				placeholder="choose something..."
				options={[
					{ name: 'option1', value: 1 },
					{ name: 'option2', value: 2 },
					{ name: 'option3', value: false },
				]}
			>
				<Icon type="location" />
			</Select>

			<Select
				name="choose"
				label="Select your favourite option:"
				placeholder="choose something..."
				size="big"
				options={[
					{ name: 'option1', value: 1 },
					{ name: 'option2', value: 2 },
					{ name: 'option3', value: false },
				]}
			/>

			{/* INPUTS */}
			<Input
				name="test"
				placeholder="Type text..."
				size="small"
				label="totot"
				type="text"
			/>
			<Input
				name="test"
				placeholder="Type text..."
				size="small"
				value="aa"
				label="aa"
				type="radio"
			/>
			<Input
				name="test"
				placeholder="Type text..."
				size="small"
				value="aa"
				label="aa"
				type="radio"
			/>
			<Input
				name="check2213"
				placeholder="Text"
				size="big"
				value="aa"
				label="aaasdasda"
				type="checkbox"
			/>

			<Input onClick={toggleTheme} placeholder="Type text..." size="medium" />
			<Input onClick={toggleTheme} placeholder="Type text..." size="big">
				Szukaj
				<Icon type="search" />
			</Input>
			<Input onClick={toggleTheme} placeholder="Type text..." size="small" />
			<Input onClick={toggleTheme} placeholder="Type text..." width="0.45" />
			<Input
				onClick={toggleTheme}
				placeholder="Type text..."
				size="medium"
				width="0.45"
			/>
			<Input
				onClick={toggleTheme}
				placeholder="Type text..."
				size="big"
				width="0.45"
			/>
			<Input
				onClick={toggleTheme}
				placeholder="Type text..."
				size="big"
				width="0.45"
			/>
			<Input
				onClick={toggleTheme}
				placeholder="Type text..."
				size="small"
				shape="square"
			/>
			<Input
				onClick={toggleTheme}
				placeholder="Type text..."
				size="medium"
				shape="square"
				type="text"
			/>
			<Input
				onClick={toggleTheme}
				placeholder="Type text..."
				size="big"
				shape="square"
			>
				<Icon type="search" />
			</Input>
			<Input
				onClick={toggleTheme}
				placeholder="Type text..."
				size="small"
				shape="round"
				width="1"
			/>
			<Input
				onClick={toggleTheme}
				placeholder="Type text..."
				size="medium"
				shape="round"
			/>
			<Input
				onClick={toggleTheme}
				placeholder="Type text..."
				size="big"
				shape="round"
			/>

			<Icon type="search" />
			<Icon type="user" />
			<Icon type="user" variant="regular" />
			<Icon type="userPlus" />
			<Icon type="share" />
			<Icon type="plus" />
			<Icon type="comment" />
			<Icon type="comment" variant="regular" />
			<Icon type="envelope" />
			<Icon type="envelope" variant="regular" />
			<Icon type="send" />
			<Icon type="send" variant="regular" />
			<Icon type="save" />
			<Icon type="save" variant="regular" />
			<Icon type="location" />
			<Icon type="arrowDown" />
			<Icon type="arrowRight" />
			<Icon type="arrowUp" />
			<Icon type="arrowLeft" />
			<Input
				onClick={toggleTheme}
				placeholder="Type text..."
				size="big"
				shape="round"
			/>
		</>
	);
}
